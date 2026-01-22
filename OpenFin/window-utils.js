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

            let timeout = globalThis.LONG_DELAY; // globalThis.MEASURE_EVENT_DELAY
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all window events received, timeout reduced`);
                timeout = globalThis.SHORT_DELAY;
            }

            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout`);
                timedOut = true;
                // trackedEvents.forEach(event => {
                //     webcontent.removeListener(event, didFinishLoadListener);
                // }
                resolve();
            }, timeout);
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

            let timeout = globalThis.LONG_DELAY; // globalThis.MEASURE_EVENT_DELAY
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all view events received, timeout reduced`);
                timeout = globalThis.SHORT_DELAY;
            }

            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout`);
                timedOut = true;
                // trackedEvents.forEach(event => {
                //     webcontent.removeListener(event, didFinishLoadListener);
                // });
                resolve();
            }, timeout);
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
