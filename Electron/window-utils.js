// Window utility functions for Electron performance tests

const { performance } = require('node:perf_hooks');
require('../common/performance-constants.js');

/**
 * Creates a promise that resolves when a webcontent finishes loading
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

function waitForWindowLoaded(browserWindow, windowName) {
    return new Promise((resolve) => {

        const trackedEvents = [
            'did-finish-load'
        ];

        let timeoutId;
        let found = {};
        let timedOut = false;

        const eventHandlers = {};

        const makeListener = (eventName) => (...payload) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            const eventType = timedOut ? `${eventName} (late)` : eventName;
            globalThis.Perfs.windowEvent(windowName, eventType);
            found[eventName] = true;
            if (timedOut) return;

            // Check if all events have been received
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all window events received, resolving immediately`);
                timedOut = true;
                // Clean up all listeners
                trackedEvents.forEach(event => {
                    browserWindow.removeListener(event, eventHandlers[event]);
                });
                resolve();
                return;
            }

            // Set timeout as fallback if not all events received yet
            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout - not all events received`);
                timedOut = true;
                browserWindow.removeListener(eventName, eventHandlers[eventName]);
                resolve();
            }, globalThis.LONG_DELAY);
        }

        trackedEvents.forEach(event => {
            eventHandlers[event] = makeListener(event);
            browserWindow.addListener(event, eventHandlers[event]);
        });
    });
}

/**
 * Creates a promise that resolves when a view finishes loading
 * Manages performance marking and measurement for view loading events from ElectronBrowserWindow
 */
function waitForViewLoaded(browserWindow, viewName, windowName) {
    return new Promise((resolve) => {

        const trackedEvents = [
            'view-did-finish-load'
        ];

        let timeoutId;
        let found = {};
        let timedOut = false;

        const eventHandlers = {};

        const makeListener = (eventName) => (...payload) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }

            let eventType = timedOut ? `${eventName} (late)` : eventName;
            globalThis.Perfs.viewEvent(windowName, eventType);
            found[eventName] = true;
            if (timedOut) return;

            // Check if all events have been received
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all view events received, resolving immediately`);
                timedOut = true;
                // Clean up all listeners
                trackedEvents.forEach(event => {
                    browserWindow.removeListener(event, eventHandlers[event]);
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
        };
        trackedEvents.forEach(event => {
            eventHandlers[event] = makeListener(event);
            browserWindow.addListener(event, eventHandlers[event]);
        });

    });
}

module.exports = {
    waitForWindowLoaded,
    waitForWindowCreated,
    waitForViewLoaded
};
