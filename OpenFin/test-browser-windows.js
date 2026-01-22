// Browser Window Test - Creates 10 OpenFin Browser Windows with single tabs

async function handleLaunchBrowserWindows(targetIdentity, testState, sendStatus, { content }) {
    if (testState.isLaunching) {
        sendStatus(targetIdentity, { type: 'error', message: 'Test already in progress' });
        return;
    }

    const count = testState.count;
    const delay = testState.delay;

    ++testState.id;
    testState.isLaunching = true;
    testState.performanceMeasures = [];
    sendStatus(targetIdentity, { type: 'info', message: 'Starting Browser Window creation...' });

    try {
        const platform = window.WorkspacePlatform.getCurrentSync();
        console.log('Platform instance:', platform);
        console.log('Platform Browser API:', platform.Browser);
        
        globalThis.Perfs.startOpen(`${content} browser windows`, count, delay);
        
        const makePromise = (i) => {
            const browserName = `browser-window-${testState.id}-${i + 1}`;
            const viewName = `browser-view-${testState.id}-${i + 1}`;
            const url = content === 'blank' ? new URL('../common/blank.html', window.location.href).href
                      : content === 'example' ? 'https://www.example.com'
                      : content === 'layout' ? 'https://workspace.refinitiv.com/web'
                      : testState.heavySites[i % testState.heavySites.length];
            sendStatus(targetIdentity, { type: 'info', message: `Creating Browser Window ${i + 1}: ${browserName} (${url})...` });
            
            const browserOptions = {
                name: browserName,
                defaultWidth: 800,
                defaultHeight: 600,
                defaultLeft: 50 + (i * 50),
                defaultTop: 50 + ((i % 5) * 50),
                defaultCentered: false,
                saveWindowState: false,
                icon: 'https://openfin.co/favicon.ico',
                workspacePlatform: {
                    pages: [
                        {
                            title: `Tab ${i + 1}`,
                            pageId: `page-${i + 1}`,
                            closeButton: {
                                // these are the default values; change to hide or disable the close button on a page
                                // you specify other button customizations as part of PredefinedButtonConfig or CustomButtonConfig
                                disabled: false,
                                hidden: false
                            },
                            layout: {
                                settings: {
                                    hasHeaders: false,
                                },
                                content: [
                                    {
                                        type: 'stack',
                                        content: [
                                            {
                                                type: 'component',
                                                componentName: 'view',
                                                componentState: {
                                                    name: viewName,
                                                    url: url,
                                                    // preloadScripts: [
                                                    //     {
                                                    //         mandatory: true,
                                                    //         url: 'http://localhost:3001/OpenFin/preload-lseg.mjs'
                                                    //     },
                                                    // ]
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

            const browser = fin.Window.wrapSync({ uuid: fin.me.uuid, name: browserName });
            testState.windows.set(browserName, browser);

            const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });

            const viewLoadedPromise = window.windowUtils.waitForViewLoaded(view, viewName, browserName);
            viewLoadedPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ View ${viewName} loaded successfully (${url})` });
            });

            const browserLoadedPromise = window.windowUtils.waitForWindowLoaded(browser, browserName);
            browserLoadedPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ Browser Window ${browserName} loaded successfully (${url})` });
            });
                 
            const browserCreatedPromise = window.windowUtils.waitForWindowCreated(() => platform.Browser.createWindow(browserOptions), browserName);
            browserCreatedPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ Browser Window ${browserName} created successfully` });
            });

            return { created: browserCreatedPromise, loaded: browserLoadedPromise, viewLoaded: viewLoadedPromise };
        };
        
        const promises = [];
        for (let i = 0; i < count; i++) {
            const promise = makePromise(i);
            promises.push(promise);
            delay && await globalThis.sleep(delay);
        }

        const allDone = promises.map(p => p.loaded).concat(promises.map(p => p.viewLoaded)).concat(promises.map(p => p.created));
        Promise.all(allDone)
            .then(() => {
                globalThis.Perfs.doneOpen();
                sendStatus(targetIdentity, { type: 'success', message: '\n🎉 All Browser Windows loaded successfully!', summary: globalThis.Perfs.summary(), completed: true });
            })
            .catch(error => {
                sendStatus(targetIdentity, { type: 'error', message: `❌ Error loading Browser Windows: ${error.message}` });
            });

    }
    catch (error) {
        console.error('Error launching Browser Windows:', error);
        sendStatus(targetIdentity, { type: 'error', message: `❌ Error creating Browser Windows: ${error.message}` });
    }
    finally {
        testState.isLaunching = false;
    }
}

// Export for browser context
if (typeof window !== 'undefined') {
    window.testBrowserWindows = {
        handleLaunchBrowserWindows
    };
}
