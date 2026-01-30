// Universal launcher compatible with both OpenFin and Electron
let isLaunching = false;
let platform = 'unknown';
let platformAPI = null;
let currentPerformanceMeasures = [];
let scenarioMeasures = [];

// Platform detection and API abstraction
function detectPlatform() {
    // Check for Electron
    if (typeof window.electronAPI !== 'undefined') {
        platform = 'electron';
        console.log('Detected platform: Electron');
        return true;
    }
    
    // Check for OpenFin
    if (typeof fin !== 'undefined') {
        platform = 'openfin';
        console.log('Detected platform: OpenFin');
        return true;
    }
    
    console.error('Unknown platform - neither OpenFin nor Electron detected');
    return false;
}

// Platform abstraction layer
const PlatformAPI = {
    // OpenFin implementation
    openfin: {
        IPC_CHANNEL: 'ten-windows-test',
        pendingRequests: new Map(),
        callbacks: [],
        addListener(callback) {
            this.callbacks.push(callback);
        },
        removeListener(callback) {
            this.callbacks = this.callbacks.filter(cb => cb !== callback);
        },
        setupListener() {
            fin.InterApplicationBus.subscribe({ uuid: '*' }, this.IPC_CHANNEL, (message) => {
                // Handle response messages
                if (message.type === 'performance-data-response') {
                    const resolver = this.pendingRequests.get('performance-data');
                    if (resolver) {
                        resolver(message);
                        this.pendingRequests.delete('performance-data');
                    }
                }
                else {
                    this.callbacks.forEach(callback => callback(message));
                }
            });
        },
        
        async sendCommand(action, value) {
            await fin.InterApplicationBus.send(
                { uuid: fin.me.uuid },
                this.IPC_CHANNEL,
                { action, value }
            );
        },
        
        async getPerformanceData() {
            return new Promise((resolve) => {
                this.pendingRequests.set('performance-data', resolve);
                this.sendCommand('get-performance-data');
            });
        },
        
        async getVersion() {
            return await fin.System.getVersion();
        }
    },
    
    // Electron implementation
    electron: {
        callbacks: [],
        addListener(callback) {
            this.callbacks.push(callback);
        },
        removeListener(callback) {
            this.callbacks = this.callbacks.filter(cb => cb !== callback);
        },
        setupListener() {
            window.electronAPI.onStatusUpdate((status) => {
                this.callbacks.forEach(callback => callback(status));
            });
        },
        
        async sendCommand(action, value) {
            window.electronAPI.sendCommand(action, value);
        },
        
        async getPerformanceData() {
            if (window.electronAPI.getPerformanceData) {
                return await window.electronAPI.getPerformanceData();
            }
            // Fallback to cached data if API not available
            return {
                measures: currentPerformanceMeasures,
                timestamp: new Date().toISOString(),
                platform: 'electron'
            };
        },
        
        async getVersion() {
            return 'Electron ' + process.versions.electron;
        }
    }
};

function updateStatus(message, type = 'info') {
    const statusDiv = document.getElementById('status');
    const timestamp = new Date().toLocaleTimeString();
    const className = type === 'success' ? 'success' : type === 'error' ? 'error' : '';
    statusDiv.innerHTML += `<p class="${className}">[${timestamp}] ${message}</p>`;
    
    // Force scroll to bottom
    statusDiv.scrollTop = statusDiv.scrollHeight;
}

function displaySummary(summary) {
    const statusDiv = document.getElementById('status');
    for(const line of summary) {
        statusDiv.innerHTML += `<p class="summary">${line}</p>`;
    } 
    // Force scroll to bottom
    statusDiv.scrollTop = statusDiv.scrollHeight;
}

// Set up status update listener
function setupStatusListener() {
    platformAPI.setupListener();
    platformAPI.addListener((message) => {
        console.log('Received status update:', message);
        
        if (message.type && message.message) {
            updateStatus(message.message, message.type);
        }
        
        if (message.summary) {
            displaySummary(message.summary);
        }

        // Update button states based on status
        if (message.completed) {
            isLaunching = false;
            document.getElementById('launchBtn').disabled = false;
            document.getElementById('launchBlankBtn').disabled = false;
            document.getElementById('launchExampleBtn').disabled = false;
            document.getElementById('launchBrowserBtn').disabled = false;
            document.getElementById('launchBlankBrowserBtn').disabled = false;
            document.getElementById('launchExampleBrowserBtn').disabled = false;
            document.getElementById('launchLayoutBtn').disabled = false;
            document.getElementById('downloadBtn').disabled = false;
        }
    });

    console.log('Status listener set up for platform:', platform);
}

// Generic command execution function
async function executeLaunchCommand(buttonId, action, statusMessage, commandName) {
    if (isLaunching) {
        return;
    }

    isLaunching = true;
    document.getElementById(buttonId).disabled = true;
    document.getElementById('status').innerHTML += `<p>${statusMessage}</p>`;
    
    try {
        await platformAPI.sendCommand(action);
        console.log(`${commandName} command sent`);
    }
    catch (error) {
        updateStatus(`❌ Error sending ${commandName} command: ${error.message}`, 'error');
        console.error(`Error sending ${commandName} command:`, error);
        isLaunching = false;
        document.getElementById(buttonId).disabled = false;
    }
}

async function setCount(value) {
    const label = document.getElementById('selectedCountLabel');
    label.textContent = value;
    const commandName = 'set-windows-count';
    await platformAPI.sendCommand(commandName, value);
    console.log(`${commandName} command sent with ${value}`);
}

async function setDelay(value) {
    const label = document.getElementById('selectedDelayLabel');
    label.textContent = value;
    const commandName = 'set-delay';
    await platformAPI.sendCommand(commandName, value);
    console.log(`${commandName} command sent with ${value}`);
}

async function reset() {
    const commandName = 'reset';
    await platformAPI.sendCommand(commandName);
    console.log(`${commandName} command sent`);
    document.getElementById('status').innerHTML = '';
    console.log(globalThis.Perfs._data);
}

async function onLaunchWindows() {
    await executeLaunchCommand(
        'launchBtn',
        'launch-windows',
        'Sending launch command...',
        'launch'
    );
}

async function onLaunchBlankWindows() {
    await executeLaunchCommand(
        'launchBlankBtn',
        'launch-blank-windows',
        'Sending test blank windows launch command...',
        'test blank windows launch'
    );
}

async function onLaunchExampleWindows() {
    await executeLaunchCommand(
        'launchExampleBtn',
        'launch-example-windows',
        'Sending test example windows launch command...',
        'test example windows launch'
    );
}

async function onCloseAllWindows() {
    updateStatus('\nSending close command...');
    
    try {
        await platformAPI.sendCommand('close-windows');
        console.log('Close command sent');
    }
    catch (error) {
        updateStatus(`❌ Error sending close command: ${error.message}`, 'error');
        console.error('Error sending close command:', error);
    }
}

async function onLaunchBrowserWindows() {
    await executeLaunchCommand(
        'launchBrowserBtn',
        'launch-browser-windows',
        'Sending Browser Window launch command...',
        'Browser Window launch'
    );
}

async function onLaunchBlankBrowserWindows() {
    await executeLaunchCommand(
        'launchBlankBrowserBtn',
        'launch-blank-browser-windows',
        'Sending blank browser window launch command...',
        'blank browser window launch'
    );
}

async function onLaunchExampleBrowserWindows() {
    await executeLaunchCommand(
        'launchExampleBrowserBtn',
        'launch-example-browser-windows',
        'Sending example browser window launch command...',
        'example browser window launch'
    );
}

async function onLaunchLayoutWindows() {
    await executeLaunchCommand(
        'launchLayoutBtn',
        'launch-layout-windows',
        'Sending Layout Window launch command...',
        'Layout Window launch'
    );
}

// Open login window
async function onOpenLoginWindow() {
    try {
        updateStatus('Opening login window...', 'info');
        await platformAPI.sendCommand('open-login-window');
        console.log('Open login window command sent');
    }
    catch (error) {
        updateStatus(`❌ Error opening login window: ${error.message}`, 'error');
        console.error('Error opening login window:', error);
    }
}

// Initialize when ready
async function init() {
    try {
        // Detect platform
        if (!detectPlatform()) {
            updateStatus('❌ Unsupported platform', 'error');
            return;
        }
        
        // Set platform API
        platformAPI = PlatformAPI[platform];
        
        // Update title with platform badge (Container vs OpenFin/WorkspacePlatform)
        const title = document.getElementById('appTitle');
        let platformDisplayName = platform.charAt(0).toUpperCase() + platform.slice(1);
        if (platform === 'openfin' && typeof window !== 'undefined' && window.location.search.includes('platform=container')) {
            platformDisplayName = 'Container';
        }
        title.innerHTML = `${platformDisplayName} Ten Windows Launcher <span class="platform-badge">${platformDisplayName}</span>`;
        
        // Set up status listener
        setupStatusListener();
        
        // Get and display version
        try {
            const version = await platformAPI.getVersion();
            console.log('Platform version:', version);
            
            // Display version in title
            const versionSpan = document.createElement('span');
            versionSpan.className = 'platform-badge';
            versionSpan.style.fontSize = '12px';
            versionSpan.style.marginLeft = '10px';
            versionSpan.textContent = version;
            title.appendChild(versionSpan);
        }
        catch (e) {
            console.warn('Could not get version:', e);
        }
        
        updateStatus('Ready to launch windows. Click "Launch Windows" to start.');
    }
    catch (error) {
        console.error('Error during initialization:', error);
        updateStatus(`❌ Initialization error: ${error.message}`, 'error');
    }
}

async function getPerformanceData() {
    let perfData = await platformAPI.getPerformanceData();
    if (!perfData.measures || perfData.measures.length === 0) {
        // Use cached data
        perfData = {
            measures: currentPerformanceMeasures,
            timestamp: new Date().toISOString(),
            platform: platform
        };
    }
    return perfData;
}

// Download performance data as JSON
async function onDownloadPerformanceData() {
    try {
        const data = await getPerformanceData();
        if (!data.measures || data.measures.length === 0) {
            updateStatus('❌ No performance data available', 'error');
            return;
        }
        
        // Create and download JSON file
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `performance-data-${new Date().toISOString().replace(/:/g, '-')}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        updateStatus('✅ Performance data downloaded successfully', 'success');
    }
    catch (error) {
        updateStatus(`❌ Error downloading data: ${error.message}`, 'error');
        console.error('Error downloading performance data:', error);
    }
}

// Start initialization when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    init();
}
