// Test for regular windows

const { BrowserWindow } = require('electron');
const { performance } = require('node:perf_hooks');

require('../common/performance-constants');
require('../common/utils.js');

const { waitForWindowLoaded, waitForWindowCreated } = require('./window-utils.js');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

// Handle launch windows command
async function handleLaunchWindows(testState, sendStatus, { content }) {
    if (testState.isLaunching) {
        sendStatus({ type: 'error', message: 'Test already in progress' });
        return;
    }

    const count = testState.count;
    const delay = testState.delay;

    ++testState.id;
    testState.isLaunching = true;
    sendStatus({ type: 'info', message: 'Starting window creation...' });

    try {
        globalThis.Perfs.startOpen(`${content} windows`, count, delay);

        const makePromise = (i) => {
            const windowName = `window-${testState.id}-${i + 1}`;
            const url = content === 'blank' ? pathToFileURL(path.join(__dirname, '../common/blank.html')).href
                      : content === 'example' ? 'https://www.example.com'
                      : testState.heavySites[i % testState.heavySites.length];
            
            sendStatus({ type: 'info', message: `Creating window ${i + 1}: ${windowName} (${url})...` });
            
            const windowOptions = {
                width: 800,
                height: 600,
                x: 50 + (i * 50),
                y: 50 + ((i % 5) * 50),
                show: true,
                webPreferences: {
                    nodeIntegration: false,
                    contextIsolation: true
                }
            };

            // Include time to create the window
            const createdMarker = performance.mark(`create-${windowName}`);

            const win = new BrowserWindow(windowOptions);
            testState.windows.set(windowName, win);

            const loadedPromise = waitForWindowLoaded(win.webContents, windowName, createdMarker.name);
            loadedPromise.then(() => {
                sendStatus({ type: 'success', message: `✓ Window ${windowName} loaded successfully (${url})` });
            });

            const createdPromise = waitForWindowCreated(() => win.webContents.loadURL(url), windowName);
            createdPromise.then(() => {
                sendStatus({ type: 'success', message: `✓ Window ${windowName} created successfully (${url})` });
            });

            return { created: createdPromise, loaded: loadedPromise };
        };

        const promises = [];
        for (let i = 0; i < count; i++) {
            const promise = makePromise(i);
            promises.push(promise);
            delay && await globalThis.sleep(delay);
        }

        const allDone = promises.map(p => p.loaded).concat(promises.map(p => p.created));
        Promise.all(allDone)
            .then(() => {
                globalThis.Perfs.doneOpen();
                sendStatus({ type: 'success', message: '\n🎉 All windows loaded successfully!', summary: globalThis.Perfs.summary(), completed: true });
            });

    }
    catch (error) {
        console.error('Error launching windows:', error);
        sendStatus({ type: 'error', message: `❌ Error creating windows: ${error.message}` });
    }
    finally {
        testState.isLaunching = false;
    }
}

module.exports = {
    handleLaunchWindows
};
