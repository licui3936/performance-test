// Test for Browser Windows (BrowserWindow + BrowserViews as tabs)

const ElectronBrowserWindow = require('./browser-window.js');
const { waitForWindowLoaded, waitForViewLoaded, waitForWindowCreated } = require('./window-utils.js');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

require('../common/performance-constants.js');
require('../common/utils.js');

// Handle launch browser windows command
async function handleLaunchBrowserWindows(testState, sendStatus, { content }) {
    if (testState.isLaunching) {
        sendStatus({ 
            type: 'error', 
            message: 'Browser Window test already in progress' 
        });
        return;
    }

    const count = testState.count;
    const delay = testState.delay;

    ++testState.id;
    testState.isLaunching = true;
    testState.performanceMeasures = [];
    sendStatus({ type: 'info', message: 'Starting Browser Window creation...' });

    try {
        globalThis.Perfs.startOpen(`${content} browser windows`, count, delay);

        const makePromise = (i) => {
            const browserName = `browser-window-${testState.id}-${i + 1}`;
            const viewName = `browser-view-${testState.id}-${i + 1}`;
            const url = content === 'blank' ? 'http://localhost:3001/common/blank.html'
                      : content === 'example' ? 'https://www.example.com'
                      : content === 'layout' ? 'https://workspace.refinitiv.com/web'
                      : testState.heavySites[i % testState.heavySites.length];            
            sendStatus({ type: 'info', message: `Creating Browser Window ${i + 1}: ${browserName} (${url})...` });
            
            const browserOptions = {
                name: browserName,
                width: 800,
                height: 400,
                x: 50 + (i * 50),
                y: 50 + ((i % 5) * 50),
                workspacePlatform: {
                    pages: [
                        {
                            title: `Tab ${i + 1}`,
                            pageId: `page-${i + 1}`,
                            layout: {
                                content: [
                                    {
                                        type: 'stack',
                                        content: [
                                            {
                                                type: 'component',
                                                componentName: 'view',
                                                componentState: {
                                                    name: viewName,
                                                    url: url
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            };

            const browserWindow = new ElectronBrowserWindow(browserOptions);

            const viewLoadedPromise = waitForViewLoaded(browserWindow, viewName, browserName);
            viewLoadedPromise.then(() => {
                sendStatus({ type: 'success', message: `✓ View ${viewName} loaded successfully (${url})` });
            });

            // Set up event listeners for browser window loading
            const browserLoadedPromise = waitForWindowLoaded(browserWindow, browserName);
            browserLoadedPromise.then(() => {
                sendStatus({ type: 'success', message: `✓ Browser Window ${browserName} loaded successfully` });
            });

            // Create the browser window
            const browserCreatedPromise = waitForWindowCreated(() => browserWindow.create(), browserName);
            browserCreatedPromise.then(() => {
                sendStatus({ type: 'success', message: `✓ Browser Window ${browserName} created successfully` });
            });
            testState.windows.set(browserName, browserWindow.window);

            return { created: browserCreatedPromise, loaded: browserLoadedPromise, viewLoaded: viewLoadedPromise };
        };

        const promises = [];
        for (let i = 0; i < count; i++) {
            const promise = makePromise(i);
            promises.push(promise);
            delay && await globalThis.sleep(delay);
        }


        const allDone = promises.map(p => p.loaded).concat(promises.map(p => p.viewLoaded).concat(promises.map(p => p.created)));
        Promise.all(allDone)
            .then(() => {
                globalThis.Perfs.doneOpen();
                sendStatus({ type: 'success', message: '\n✓ All 10 Browser Windows loaded successfully!', summary: globalThis.Perfs.summary(), completed: true });
            })
            .catch(error => {
                sendStatus({ type: 'error', message: `❌ Error loading Browser Windows: ${error.message}` });
            });

    }
    catch (error) {
        console.error('Error launching Browser Windows:', error);
        sendStatus({ type: 'error', message: `❌ Error creating Browser Windows: ${error.message}` });
    }
    finally {
        testState.isLaunching = false;
    }
}

module.exports = {
    handleLaunchBrowserWindows
};
