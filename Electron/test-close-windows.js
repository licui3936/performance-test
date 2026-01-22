// Close windows functionality

const { performance } = require('node:perf_hooks');
require('../common/performance-constants');

// Handle close windows command
async function handleCloseWindows(testState, sendStatus) {
    sendStatus({ type: 'info', message: 'Closing all windows...' });

    try {
        const closedPromises = [];
        globalThis.Perfs.startClose(testState.windows.size);
        testState.windows.forEach((window, windowName) => {
            try {
                if (!window.isDestroyed()) {
                    const closedPromise = new Promise((resolve) => {
                        window.addListener('closed', () => {
                            globalThis.Perfs.closed(windowName);
                            sendStatus({ type: 'success', message: `✓ Window ${windowName} closed` });
                            resolve();
                        });
                    });

                    closedPromises.push(closedPromise);
                    globalThis.Perfs.closing(windowName);
                    window.close();
                }
                else {
                    sendStatus({ type: 'error', message: `⚠ Window ${windowName} already closed` });
                }
            }
            catch (error) {
                sendStatus({ type: 'error', message: `⚠ Window ${windowName} error: ${error.message}` });
            }
        });
        
        // Wait for all closed events
        await Promise.all(closedPromises);
        
        testState.windows = new Map();

        globalThis.Perfs.doneClose();
        sendStatus({ type: 'success', message: '✓ All windows closed', summary: globalThis.Perfs.summary(), completed: true });

    }
    catch (error) {
        console.error('Error closing windows:', error);
        sendStatus({ type: 'error', message: `❌ Error closing windows: ${error.message}` });
    }
}

module.exports = {
    handleCloseWindows
};
