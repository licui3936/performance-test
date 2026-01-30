// Main provider initialization script for Ten Windows Container (Core API only - no WorkspacePlatform)

console.log('Initializing Ten Windows Container Provider (@openfin/core only)...');

// Test state management
const testState = {
    id: 0,
    windows: new Map(),
    performanceMeasures: [],
    isLaunching: false,
    heavySites: [],
    count: 10,
    delay: 0
};

const IPC_CHANNEL = 'ten-windows-test';

const testModules = {};

async function loadTestModules() {
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

    testModules.windowUtils = window.windowUtils;
    testModules.windows = window.testWindows;
    testModules.closeWindows = window.closeWindows;
    testModules.browserWindows = window.testBrowserWindows;

    console.log('Test modules loaded successfully');
}

async function loadHeavySitesConfig() {
    testState.heavySites = await window.loadHeavySites();
    console.log('Loaded heavy sites:', testState.heavySites.length);
}

async function openLoginWindow(identity, sendStatus) {
    const platform = fin.Platform.getCurrentSync();
    await platform.createWindow({
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
    sendStatus(identity, { type: 'success', message: '✅ Login window opened' });
}

async function initializePlatform() {
    const mainWindow = await fin.Window.getCurrent();
    fin.GlobalHotkey.register('CommandOrControl+Shift+Alt+M', async () => {
        mainWindow.showDeveloperTools();
    });

    try {
        if (typeof fin === 'undefined') {
            console.error('OpenFin API not available');
            return;
        }

        console.log('OpenFin API is available, Platform UUID:', fin.me.uuid);

        await loadHeavySitesConfig();

        // Core API only: fin.Platform.init() - no WorkspacePlatform
        await fin.Platform.init({});

        console.log('Platform (core) initialized successfully');

        await loadTestModules();
        setupIPCHandlers();
        await launchLauncherWindow();
    } catch (error) {
        console.error('Error initializing platform:', error);
    }
}

function setupIPCHandlers() {
    console.log('Setting up IPC handlers on channel:', IPC_CHANNEL);

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
            sendStatus(identity, { type: 'error', message: error.message });
        }
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
        timestamp: new Date().toISOString(),
        platform: 'Container (Core)',
        measures: globalThis.Perfs.stats()
    };

    fin.InterApplicationBus.send({ uuid: targetIdentity.uuid, name: targetIdentity.name }, IPC_CHANNEL, data)
        .catch(err => console.error('Error sending performance data:', err));
}

async function launchLauncherWindow() {
    try {
        console.log('Creating launcher window...');

        const launcherOptions = {
            name: 'ten-windows-launcher',
            url: '../common/ten-windows-launcher.html?platform=container',
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

        await launcherWindow.focus();

        fin.GlobalHotkey.register('CommandOrControl+Shift+Alt+I', async () => {
            launcherWindow.showDeveloperTools();
        });
    } catch (error) {
        console.error('Error launching launcher window:', error);
    }
}

fin.System.getVersion().then(version => {
    console.log('OpenFin Runtime Version:', version);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlatform);
} else {
    initializePlatform();
}
