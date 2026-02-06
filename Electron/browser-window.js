// Electron Browser Window with Tabs Implementation
// Simulates OpenFin Browser Window behavior using BrowserWindow + BrowserViews

const { BrowserWindow, BrowserView } = require('electron');
const path = require('path');
const { EventEmitter } = require('events');

class ElectronBrowserWindow extends EventEmitter {
    constructor(options) {
        super();
        this.window = null;
        this.tabs = [];
        this.activeTabIndex = 0;
        this.options = options;
        this.name = options.name || `browser-${Date.now()}`;
    }

    async create() {
        // Create main browser window with frame for tab bar
        this.window = new BrowserWindow({
            width: this.options.width || 800,
            height: this.options.height || 600,
            x: this.options.x,
            y: this.options.y,
            show: true,
            frame: true,
            webPreferences: {
                devTools: true,
                enableRemoteModule: true,
                nodeIntegration: false,
                nodeIntegrationInSubFrames: true,
                contextIsolation: true,
                preload: path.join(__dirname, 'tab-bar-preload.js')
            }
        });

        ['did-start-loading', 'did-finish-load', 'page-title-updated', 'closed'].forEach(event => {
            this.window.webContents.on(event, (...args) => {
                this.emit(event, { name: this.name, args });
            });
        });

        await this.window.loadFile(path.join(__dirname, 'tab-bar.html'));

        // 
        // Create tabs based on options
        const tabPromises = [];
        const pages = this.options.workspacePlatform?.pages || [];

        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const viewName = page.layout?.content?.[0]?.content?.[0]?.componentState?.name || `view-${i}`;
            const url = page.layout?.content?.[0]?.content?.[0]?.componentState?.url || 'about:blank';
            
            const tabPromise = this.createTab(viewName, url, i);
            tabPromises.push(tabPromise);
        }

        // Show first tab
        if (this.tabs.length > 0) {
            this.showTab(0);
        }
    }

    async createTab(viewName, url, tabIndex) {
        const view = new BrowserView({
            webPreferences: {
                devTools: true,
                enableRemoteModule: true,
                nodeIntegration: false,
                contextIsolation: true,
                nodeIntegrationInSubFrames: true,
                preload: path.join(__dirname, 'preload.js')
            }
        });

        const tab = {
            view: view,
            name: viewName,
            url: url,
            title: `Tab ${tabIndex + 1}`
        };

        this.tabs.push(tab);

        // Set up view bounds (accounting for tab bar height)
        const TAB_BAR_HEIGHT = 40;
        const bounds = this.window.getContentBounds();
        view.setBounds({
            x: 0,
            y: TAB_BAR_HEIGHT,
            width: bounds.width,
            height: bounds.height - TAB_BAR_HEIGHT
        });

        ['did-start-loading', 'did-finish-load', 'page-title-updated'].forEach(event => {
            view.webContents.on(event, () => {
                // Forward view event with renamed event name
                this.emit(`view-${event}`, { name: viewName, url });
            });
        });
        view.webContents.on('did-finish-load', () => {
            // Update tab title
            const title = view.webContents.getTitle();
            tab.title = title || tab.title;
            this.updateTabBar();
        });
        view.webContents.on('context-menu', () => {
            view.webContents.openDevTools();
        });
        view.webContents.loadURL(url);
    }

    showTab(index) {
        if (index < 0 || index >= this.tabs.length) return;

        // Remove current view
        if (this.tabs[this.activeTabIndex]) {
            this.window.removeBrowserView(this.tabs[this.activeTabIndex].view);
        }

        // Add and show new view
        const tab = this.tabs[index];
        this.window.addBrowserView(tab.view);

        // Update bounds
        const TAB_BAR_HEIGHT = 40;
        const bounds = this.window.getContentBounds();
        tab.view.setBounds({
            x: 0,
            y: TAB_BAR_HEIGHT,
            width: bounds.width,
            height: bounds.height - TAB_BAR_HEIGHT
        });

        this.activeTabIndex = index;
        this.updateTabBar();
    }

    updateTabBar() {
        if (this.window && !this.window.isDestroyed()) {
            const tabData = this.tabs.map((tab, index) => ({
                title: tab.title,
                active: index === this.activeTabIndex
            }));

            this.window.webContents.send('update-tabs', {
                tabs: tabData,
                activeIndex: this.activeTabIndex
            });
        }
    }

    close() {
        if (this.window && !this.window.isDestroyed()) {
            this.window.close();
        }
    }

    isDestroyed() {
        return !this.window || this.window.isDestroyed();
    }
}

module.exports = ElectronBrowserWindow;
