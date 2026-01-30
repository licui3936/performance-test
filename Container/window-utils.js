// Window utility functions for Container (Core API) performance tests

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
        const trackedEvents = ['did-finish-load'];
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

            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all window events received, resolving immediately`);
                timedOut = true;
                trackedEvents.forEach(event => {
                    webcontent.removeListener(event, didFinishLoadListener);
                });
                resolve();
                return;
            }

            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout - not all events received`);
                timedOut = true;
                resolve();
            }, globalThis.LONG_DELAY);
        };

        trackedEvents.forEach(event => {
            webcontent.addListener(event, didFinishLoadListener);
        });
    });
}

function waitForViewLoaded(webcontent, viewName, windowName) {
    return new Promise((resolve) => {
        const trackedEvents = ['did-finish-load'];
        let timeoutId;
        let found = {};
        let timedOut = false;

        const didFinishLoadListener = (payload) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            const eventType = timedOut ? `${payload.type} (late)` : payload.type;
            globalThis.Perfs.viewEvent(windowName, eventType);
            found[payload.type] = true;
            if (timedOut) return;

            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all view events received, resolving immediately`);
                timedOut = true;
                trackedEvents.forEach(event => {
                    webcontent.removeListener(event, didFinishLoadListener);
                });
                resolve();
                return;
            }

            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout - not all view events received`);
                timedOut = true;
                resolve();
            }, globalThis.LONG_DELAY);
        };

        trackedEvents.forEach(event => {
            webcontent.addListener(event, didFinishLoadListener);
        });
    });
}

if (typeof window !== 'undefined') {
    window.windowUtils = {
        waitForWindowCreated,
        waitForWindowLoaded,
        waitForViewLoaded
    };
}
