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
            'did-start-loading',
            'did-finish-load',
            'page-title-updated',
            'page-favicon-updated'
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

            let timeout = globalThis.LONG_DELAY; // globalThis.MEASURE_EVENT_DELAY
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all window events received, timeout reduced`);
                timeout = globalThis.SHORT_DELAY;
            }

            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout`);
                timedOut = true;
                // trackedEvents.forEach(event => {
                //    browserWindow.removeListener(event, didFinishLoadListener);
                // });
                browserWindow.removeListener(eventName, eventHandlers[eventName]);
                resolve();
            }, timeout);
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
            'view-did-start-loading',
            'view-did-finish-load',
            'view-page-title-updated'
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

            let timeout = globalThis.LONG_DELAY; // globalThis.MEASURE_EVENT_DELAY
            if (Object.keys(found).length === trackedEvents.length) {
                globalThis.Perfs.log(windowName, `all view events received, timeout reduced`);
                timeout = globalThis.SHORT_DELAY;
            }

            timeoutId = setTimeout(() => {
                globalThis.Perfs.log(windowName, `timeout`);
                timedOut = true;
                // browserWindow.removeListener(eventName, eventHandlers[eventName]);
                resolve();
            }, timeout);
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
