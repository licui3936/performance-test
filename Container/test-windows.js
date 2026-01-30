// Regular Window Test - Creates windows via fin.Window.create

async function handleLaunchWindows(targetIdentity, testState, sendStatus, { content }) {
    if (testState.isLaunching) {
        sendStatus(targetIdentity, { type: 'error', message: 'Test already in progress' });
        return;
    }

    const count = testState.count;
    const delay = testState.delay;

    ++testState.id;
    testState.isLaunching = true;
    sendStatus(targetIdentity, { type: 'info', message: 'Starting windows creation...' });

    try {
        globalThis.Perfs.startOpen(`${content} windows`, count, delay);

        const makePromise = (i) => {
            const windowName = `window-${testState.id}-${i + 1}`;
            const url = content === 'blank' ? new URL('../common/blank.html', window.location.href).href
                : content === 'example' ? 'https://www.example.com'
                    : testState.heavySites[i % testState.heavySites.length];

            sendStatus(targetIdentity, { type: 'info', message: `Creating window ${i + 1}: ${windowName} (${url})...` });

            const windowOptions = {
                name: windowName,
                url: url,
                defaultWidth: 800,
                defaultHeight: 600,
                defaultLeft: 50 + (i * 50),
                defaultTop: 50 + ((i % 5) * 50),
                frame: true,
                autoShow: true,
                resizable: true,
                maximizable: true,
                minimizable: true,
                saveWindowState: false,
                icon: 'https://openfin.co/favicon.ico'
            };

            const win = fin.Window.wrapSync({ uuid: fin.me.uuid, name: windowName });
            testState.windows.set(windowName, win);

            const loadedPromise = window.windowUtils.waitForWindowLoaded(win, windowName);
            loadedPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ Window ${windowName} loaded successfully (${url})` });
            });

            const createdPromise = window.windowUtils.waitForWindowCreated(
                () => fin.Window.create(windowOptions),
                windowName
            );
            createdPromise.then(() => {
                sendStatus(targetIdentity, { type: 'success', message: `✓ Window ${windowName} created successfully (${url})` });
            });

            return { created: createdPromise, loaded: loadedPromise };
        };

        const promises = [];
        for (let i = 0; i < count; i++) {
            const promise = makePromise(i);
            promises.push(promise);
            delay && await globalThis.sleep(delay);
        }

        const allDone = promises.map(p => p.loaded).concat(promises.map(p => p.created));
        Promise.all(allDone)
            .then(() => {
                globalThis.Perfs.doneOpen();
                sendStatus(targetIdentity, { type: 'success', message: '\n🎉 All windows loaded successfully!', summary: globalThis.Perfs.summary(), completed: true });
            });
    } catch (error) {
        console.error('Error launching windows:', error);
        sendStatus(targetIdentity, { type: 'error', message: `❌ Error creating windows: ${error.message}` });
    } finally {
        testState.isLaunching = false;
    }
}

if (typeof window !== 'undefined') {
    window.testWindows = {
        handleLaunchWindows
    };
}
