// Close windows functionality

async function handleCloseWindows(targetIdentity, testState, sendStatus) {
    sendStatus(targetIdentity, { type: 'info', message: 'Closing all windows...' });

    try {
        const closedPromises = [];
        globalThis.Perfs.startClose(testState.windows.size);
        testState.windows.forEach(async (window, windowName) => {
            try {
                const closedPromise = new Promise((resolve) => {
                    window.addListener('closed', () => {
                        globalThis.Perfs.closed(windowName);
                        sendStatus(targetIdentity, { type: 'success', message: `✓ Window ${windowName} closed` });
                        resolve();
                   });
                });

                closedPromises.push(closedPromise);
                globalThis.Perfs.closing(windowName);
                await window.close(true);
            }
            catch (error) {
                sendStatus(targetIdentity, { type: 'error', message: `⚠ Window ${windowName} already closed or error: ${error.message}` });
            }
        });
        
        // Wait for all closed events
        await Promise.all(closedPromises);
        
        testState.windows = new Map();

        globalThis.Perfs.doneClose();
        sendStatus(targetIdentity, { type: 'success', message: '✓ All windows closed', summary: globalThis.Perfs.summary(), completed: true, });

    }
    catch (error) {
        console.error('Error closing windows:', error);
        sendStatus(targetIdentity, { type: 'error', message: `❌ Error closing windows: ${error.message}` });
    }
}

// Export for browser context
if (typeof window !== 'undefined') {
    window.closeWindows = {
        handleCloseWindows
    };
}
