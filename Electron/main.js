// Main process for Ten Windows Performance Test

const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const { handleLaunchWindows } = require('./test-windows.js');
const { handleCloseWindows } = require('./test-close-windows.js');
const { handleLaunchBrowserWindows } = require('./test-browser-windows.js');
const { loadHeavySites } = require(path.join(__dirname, '../common/heavy-sites.js'));

// Test state management
const testState = {
    id: 0,
    windows: new Map(),
    performanceMeasures: [],
    isLaunching: false,
    heavySites: [],
    launcherWindow: null,
    count: 10, // default
    delay: 0 // default
};

// Load heavy sites configuration
async function loadHeavySitesConfig() {
    testState.heavySites = await loadHeavySites();
    console.log('Loaded heavy sites:', testState.heavySites);
}

// Send status update to launcher window
function sendStatus(status) {
    if (testState.launcherWindow && !testState.launcherWindow.isDestroyed()) {
        testState.launcherWindow.webContents.send('status-update', status);
    }
}

// Open login window
function openLoginWindow()
{
    const loginWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        center: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    loginWindow.loadURL('https://workspace.refinitiv.com/web');
}

// Set up IPC handlers
function setupIPCHandlers() {
    ipcMain.on('command', (event, action, value) => {
        console.log('Received command:', action, value);

        switch (action) {
            case 'reset':
                globalThis.Perfs.reset();
                break;
            case 'set-windows-count':
                testState.count = value;
                break;
            case 'set-delay':
                testState.delay = value;
                break;
            case 'launch-windows':
                handleLaunchWindows(testState, sendStatus, { content: 'site' });
                break;
            case 'launch-blank-windows':
                handleLaunchWindows(testState, sendStatus, { content: 'blank' });
                break;
            case 'launch-example-windows':
                handleLaunchWindows(testState, sendStatus, { content: 'example' });
                break;
            case 'close-windows':
                handleCloseWindows(testState, sendStatus);
                break;
            case 'launch-browser-windows':
                handleLaunchBrowserWindows(testState, sendStatus, { content: 'site' });
                break;
            case 'launch-blank-browser-windows':
                handleLaunchBrowserWindows(testState, sendStatus, { content: 'blank' });
                break;
            case 'launch-example-browser-windows':
                handleLaunchBrowserWindows(testState, sendStatus, { content: 'example' });
                break;
            case 'launch-layout-windows':
                handleLaunchBrowserWindows(testState, sendStatus, { content: 'layout' });
                break;
            case 'open-login-window':
                openLoginWindow();
                break;
            case 'get-status':
                sendStatus({
                    type: 'info',
                    message: `Current windows: ${testState.windows.size}`,
                    windowCount: testState.windows.size,
                    isLaunching: testState.isLaunching,
                    isClosing: testState.isClosing
                });
                break;
            default:
                console.log('Unknown command:', action);
        }
    });

    ipcMain.handle('get-performance-data', () => {
        return {
            // measures: testState.performanceMeasures.map(measure => ({
            //     name: measure.name,
            //     duration: measure.duration,
            //     startTime: measure.startTime
            // })),
            // windowCount: testState.windows.size,
            timestamp: new Date().toISOString(),
            platform: 'Electron',
            measures: globalThis.Perfs.stats()
        };
    });
}

// Create launcher window
function createLauncherWindow() {
    testState.launcherWindow = new BrowserWindow({
        width: 1000,
        height: 900,
        center: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    testState.launcherWindow.loadFile(path.join(__dirname, '../common/ten-windows-launcher.html'));

    app.whenReady().then(() => {
        globalShortcut.register('CommandOrControl+Shift+Alt+I', () => {
            testState.launcherWindow.webContents.openDevTools({ mode: 'detach' });
        });
    });

    testState.launcherWindow.on('closed', () => {
        testState.launcherWindow = null;
    });
}

// App initialization
app.whenReady().then(async () => {
    console.log('Electron app ready');
    console.log('Electron version:', process.versions.electron);
    console.log('Chrome version:', process.versions.chrome);
    
    await loadHeavySitesConfig();
    setupIPCHandlers();
    createLauncherWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createLauncherWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Cleanup on quit
app.on('before-quit', () => {
    console.log('Cleaning up test windows...');
    testState.windows.forEach(win => {
        if (!win.isDestroyed()) {
            win.close();
        }
    });
    testState.windows = new Map();
});
