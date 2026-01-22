// Window utility functions for OpenFin performance tests
/**
 * Creates a promise that resolves when a webcontent (window or view) finishes loading
 * Manages performance marking and measurement for loading events
 */
function waitForWindowCreated(promise, windowName) {
    globalThis.Perfs.creating(windowName);
    const createdPromise = promise()
        .catch((error) => {
            console.error(`Error creating window ${windowName}:`, error);
        })
        .then(() => {
            globalThis.Perfs.created(windowName);
        });
    return createdPromise;
}

function waitForWindowLoaded(webcontent, windowName) {
    return new Promise((resolve) => {

        const trackedEvents = [
            'did-start-loading',
            'did-finish-load',
            'page-title-updated',
            'page-favicon-updated'
        ];

        let timeoutId;
        let found = {};
        let timedOut = false;

        const didFinishLoadListener = (payload) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            const eventType = timedOut ? `${payload.type} (late)` : payload.type;
            globalThis.Perfs.windowEvent(windowName, eventType);
            found[payload.type] = true;
            if (timedOut) return;

            // Check if all events have been received
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all window events received, resolving immediately`);
                timedOut = true;
                // Clean up all listeners
                trackedEvents.forEach(event => {
                    webcontent.removeListener(event, didFinishLoadListener);
                });
                resolve();
                return;
            }

            // Set timeout as fallback if not all events received yet
            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout - not all events received`);
                timedOut = true;
                resolve();
            }, globalThis.LONG_DELAY);
        }

        trackedEvents.forEach(event => {
            webcontent.addListener(event, didFinishLoadListener);
        });
    });
}

function waitForViewLoaded(webcontent, viewName, windowName) {
    return new Promise((resolve) => {

        const trackedEvents = [
            // 'start-loading',
            'did-finish-load',
            'page-title-updated',
            'page-favicon-updated'
        ];

        let timeoutId;
        let found = {};
        let timedOut = false;

        const didFinishLoadListener = (payload) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            let eventType = timedOut ? `${payload.type} (late)` : payload.type;
            globalThis.Perfs.viewEvent(windowName, eventType);
            found[payload.type] = true;
            if (timedOut) return;

            // Check if all events have been received
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all view events received, resolving immediately`);
                timedOut = true;
                // Clean up all listeners
                trackedEvents.forEach(event => {
                    webcontent.removeListener(event, didFinishLoadListener);
                });
                resolve();
                return;
            }

            // Set timeout as fallback if not all events received yet
            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout - not all view events received`);
                timedOut = true;
                resolve();
            }, globalThis.LONG_DELAY);
        }

        trackedEvents.forEach(event => {
            webcontent.addListener(event, didFinishLoadListener);
        });
    });
}

// Export for browser context
if (typeof window !== 'undefined') {
    window.windowUtils = {
        waitForWindowCreated,
        waitForWindowLoaded,
        waitForViewLoaded
    };
}
