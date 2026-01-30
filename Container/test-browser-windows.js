// Browser Window Test - Creates windows via platform.createWindow (Core API, no WorkspacePlatform Browser)

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
    sendStatus(targetIdentity, { type: 'info', message: 'Starting Browser Window creation (platform.createWindow)...' });

    try {
        const platform = fin.Platform.getCurrentSync();
        globalThis.Perfs.startOpen(`${content} browser windows`, count, delay);

        const makePromise = (i) => {
            const browserName = `browser-window-${testState.id}-${i + 1}`;
            const viewName = `browser-view-${testState.id}-${i + 1}`;
            const url = content === 'blank' ? new URL('../common/blank.html', window.location.href).href
                : content === 'example' ? 'https://www.example.com'
                    : content === 'layout' ? 'https://workspace.refinitiv.com/web'
                        : testState.heavySites[i % testState.heavySites.length];
            sendStatus(targetIdentity, { type: 'info', message: `Creating Browser Window ${i + 1}: ${browserName} (${url})...` });

            const windowOptions = {
                name: browserName,
                defaultWidth: 800,
                defaultHeight: 400,
                defaultLeft: 50 + (i * 50),
                defaultTop: 50 + ((i % 5) * 50),
                defaultCentered: false,
                saveWindowState: false,
                icon: 'https://openfin.co/favicon.ico',
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
                                        url
                                    }
                                }
                            ]
                        }
                    ]
                }
            };

            const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: browserName });
            testState.windows.set(browserName, win);

            const view = fin.View.wrapSync({ uuid: fin.me.uuid, name: viewName });

            const viewLoadedPromise = window.windowUtils.waitForViewLoaded(view, viewName, browserName);
            viewLoadedPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ View ${viewName} loaded successfully (${url})` });
            });

            const loadedPromise = window.windowUtils.waitForWindowLoaded(win, browserName);
            loadedPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ Browser Window ${browserName} loaded successfully (${url})` });
            });

            const createdPromise = window.windowUtils.waitForWindowCreated(
                () => platform.createWindow(windowOptions),
                browserName
            );
            createdPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ Browser Window ${browserName} created successfully` });
            });

            return { created: createdPromise, loaded: loadedPromise, viewLoaded: viewLoadedPromise };
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
    } catch (error) {
        console.error('Error launching Browser Windows:', error);
        sendStatus(targetIdentity, { type: 'error', message: `❌ Error creating Browser Windows: ${error.message}` });
    } finally {
        testState.isLaunching = false;
    }
}

if (typeof window !== 'undefined') {
    window.testBrowserWindows = {
        handleLaunchBrowserWindows
    };
}
