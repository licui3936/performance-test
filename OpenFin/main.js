// Main provider initialization script for Ten Windows Performance Test
import WorkspacePlatform from './dist/workspace-platform.bundle.js';

console.log('Initializing Ten Windows Provider...');
console.log('WorkspacePlatform module loaded:', WorkspacePlatform);

// Test state management
const testState = {
    id: 0,
    windows: new Map(),
    performanceMeasures: [],
    isLaunching: false,
    heavySites: [], // Will be loaded from JSON
    count: 10, // default
    delay: 0 // default
};

// IPC Channel name
const IPC_CHANNEL = 'ten-windows-test';

// Load test modules
const testModules = {};

async function loadTestModules() {
    // Load test scripts dynamically
    const scriptUrls = [
        'window-utils.js',
        'test-windows.js',
        'test-close-windows.js',
        'test-browser-windows.js'
    ];
    
    for (const url of scriptUrls) {
        await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    // Store references to test modules
    testModules.windowUtils = window.windowUtils;
    testModules.windows = window.testWindows;
    testModules.closeWindows = window.closeWindows;
    testModules.browserWindows = window.testBrowserWindows;
    
    console.log('Test modules loaded successfully');
}

// Load heavy sites configuration
async function loadHeavySitesConfig() {
    testState.heavySites = await window.loadHeavySites();
    console.log('Loaded heavy sites:', testState.heavySites);
}

// Open login window
async function openLoginWindow(identity, sendStatus)
{
    await fin.Window.create({
        name: 'login-window-' + Date.now(),
        url: 'https://workspace.refinitiv.com/web',
        defaultWidth: 1200,
        defaultHeight: 800,
        defaultLeft: 100,
        defaultTop: 100,
        frame: true,
        autoShow: true,
        resizable: true,
        maximizable: true,
        minimizable: true
    });
    sendStatus(identity, {
        type: 'success',
        message: '✅ Login window opened'
    });
}

async function initializePlatform() {

    const mainWindow = await fin.Window.getCurrent();
    fin.GlobalHotkey.register('CommandOrControl+Shift+Alt+M', async () => {
        mainWindow.showDeveloperTools();
    });
    // mainWindow.showDeveloperTools();

    try {
        console.log('Checking OpenFin API availability...');
        
        // Wait for OpenFin API to be ready
        if (typeof fin === 'undefined') {
            console.error('OpenFin API not available');
            return;
        }

        console.log('OpenFin API is available');
        console.log('Platform UUID:', fin.me.uuid);

        // Load heavy sites configuration
        await loadHeavySitesConfig();

        // Initialize the platform first with browser window support
        const platform = await WorkspacePlatform.init({
            browser: {
                title: 'Ten Windows Test Browser'
            },
            overrideCallback: async (Provider) => {
                class Override extends Provider {
                    async handleSaveModalOnPageClose(payload) {
                        const result = {
                            shouldShowModal: false
                        };
                        return result;
                    }
                }
                return new Override();
            }
        });

        console.log('Platform initialized successfully');
        console.log('Platform instance:', platform);
        console.log('Platform Browser API:', platform.Browser);
        
        // Load test modules after platform is initialized
        await loadTestModules();

        // Set up IPC message handlers
        setupIPCHandlers();

        // Launch the launcher window after platform is ready
        await launchLauncherWindow();

    } catch (error) {
        console.error('Error initializing platform:', error);
    }
}

function setupIPCHandlers() {
    console.log('Setting up IPC handlers on channel:', IPC_CHANNEL);

    // Handle launch windows command
    fin.InterApplicationBus.subscribe({ uuid: '*' }, IPC_CHANNEL, async (message, identity) => {
        console.log('Received IPC message:', message.action, 'from:', identity.name);

        try {
            switch (message.action) {
                case 'reset':
                    globalThis.Perfs.reset();
                    break;
                case 'set-windows-count':
                    testState.count = message.value;
                    break;
                case 'set-delay':
                    testState.delay = message.value;
                    break;
                case 'launch-windows':
                    await testModules.windows.handleLaunchWindows(identity, testState, sendStatus, { content: 'site' });
                    break;
                case 'launch-blank-windows':
                    await testModules.windows.handleLaunchWindows(identity, testState, sendStatus, { content: 'blank' });
                    break;
                case 'launch-example-windows':
                    await testModules.windows.handleLaunchWindows(identity, testState, sendStatus, { content: 'example' });
                    break;
                case 'launch-browser-windows':
                    await testModules.browserWindows.handleLaunchBrowserWindows(identity, testState, sendStatus, { content: 'site' });
                    break;
                case 'launch-blank-browser-windows':
                    await testModules.browserWindows.handleLaunchBrowserWindows(identity, testState, sendStatus, { content: 'blank' });
                    break;
                case 'launch-example-browser-windows':
                    await testModules.browserWindows.handleLaunchBrowserWindows(identity, testState, sendStatus, { content: 'example' });
                    break;
                case 'launch-layout-windows':
                    await testModules.browserWindows.handleLaunchBrowserWindows(identity, testState, sendStatus, { content: 'layout' });
                    break;
                case 'close-windows':
                    await testModules.closeWindows.handleCloseWindows(identity, testState, sendStatus);
                    break;
                case 'open-login-window':
                    await openLoginWindow(identity, sendStatus);
                    break;
                case 'get-status':
                    sendStatus(identity);
                    break;
                case 'get-performance-data':
                    sendPerformanceData(identity);
                    break;
                default:
                    console.warn('Unknown action:', message.action);
            }
        } catch (error) {
            console.error('Error handling IPC message:', error);
            sendStatus(identity, { 
                type: 'error', 
                message: error.message 
            });
        }
    });

    // IPC relay handler for IPC performance tests
    fin.InterApplicationBus.subscribe({ uuid: '*' }, 'ipc-relay-to-window2', async (message, identity) => {
        console.log('IPC Relay: Received message from window1, forwarding to window2');
        
        // Add provider timestamp
        const providerReceiveTime = performance.now();
        
        // Forward to window2
        fin.InterApplicationBus.send(
            { uuid: fin.me.uuid, name: 'ipc-test-window2' },
            'ipc-test-data',
            {
                ...message,
                providerReceiveTime: providerReceiveTime,
                providerSendTime: performance.now()
            }
        ).catch(err => console.error('Error relaying to window2:', err));
    });

    // Handle IPC test results from window2
    fin.InterApplicationBus.subscribe({ uuid: '*' }, 'ipc-test-results', async (results, identity) => {
        console.log('IPC Test Results received:', results);
        // Forward results back to the launcher
        fin.InterApplicationBus.send(
            { uuid: fin.me.uuid, name: 'ten-windows-launcher' },
            IPC_CHANNEL,
            {
                type: 'ipc-test-results',
                ...results
            }
        ).catch(err => console.error('Error sending results to launcher:', err));
    });
}

function sendStatus(targetIdentity, status = null) {
    const statusMessage = status || {
        type: 'info',
        message: `Current windows: ${testState.windows.size}`,
        windowCount: testState.windows.size,
        isLaunching: testState.isLaunching
    };

    fin.InterApplicationBus.send(
        { uuid: targetIdentity.uuid, name: targetIdentity.name },
        IPC_CHANNEL,
        statusMessage
    ).catch(err => console.error('Error sending status:', err));
}

function sendPerformanceData(targetIdentity) {
    const data = {
        type: 'performance-data-response',
        // measures: testState.performanceMeasures.map(measure => ({
        //     name: measure.name,
        //     duration: measure.duration,
        //     startTime: measure.startTime
        // })),
        // windowCount: testState.windows.size,
        timestamp: new Date().toISOString(),
        platform: 'OpenFin',
        measures: globalThis.Perfs.stats()
    };

    fin.InterApplicationBus.send({ uuid: targetIdentity.uuid, name: targetIdentity.name }, IPC_CHANNEL, data)
    .catch(err => console.error('Error sending performance data:', err));
}

function sendCsvTimeline(targetIdentity) {
    // CSV generation happens in the client using the common csv.js module
    // Just send the measures data
    const data = {
        type: 'csv-timeline-response',
        measures: testState.performanceMeasures.map(measure => ({
            name: measure.name,
            duration: measure.duration,
            startTime: measure.startTime
        }))
    };

    fin.InterApplicationBus.send(
        { uuid: targetIdentity.uuid, name: targetIdentity.name },
        IPC_CHANNEL,
        data
    ).catch(err => console.error('Error sending CSV timeline data:', err));
}

async function launchLauncherWindow() {
    try {
        console.log('Creating launcher window...');

        const launcherOptions = {
            name: 'ten-windows-launcher',
            url: '../common/ten-windows-launcher.html',
            defaultWidth: 1000,
            defaultHeight: 900,
            defaultCentered: true,
            frame: true,
            autoShow: true,
            resizable: true,
            saveWindowState: false,
            icon: 'https://openfin.co/favicon.ico'
        };

        const launcherWindow = await fin.Window.create(launcherOptions);
        console.log('Launcher window created:', launcherWindow.identity.name);

        // Focus the launcher window
        await launcherWindow.focus();

        fin.GlobalHotkey.register('CommandOrControl+Shift+Alt+I', async () => {
            launcherWindow.showDeveloperTools();
        });

    }
    catch (error) {
        console.error('Error launching launcher window:', error);
    }
}

// Handle cleanup when provider is closed
async function cleanup() {
    console.log('Cleaning up test windows...');
    testState.windows.forEach(async (win) => {
        try {
            await win.close();
        } catch (e) {
            // Ignore errors during cleanup
        }
    });
    testState.windows = new Map();
}

fin.Platform.getCurrentSync().on('platform-api-ready', () => {
    console.log('Platform API ready');
});

// Log OpenFin version info
fin.System.getVersion().then(version => {
    console.log('OpenFin Runtime Version:', version);
});

// Start initialization when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlatform);
}
else {
    initializePlatform();
}
