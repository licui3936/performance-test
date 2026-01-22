const { contextBridge, ipcRenderer } = require('electron');

// Expose minimal API for tab bar
contextBridge.exposeInMainWorld('electronAPI', {
    onUpdateTabs: (callback) => ipcRenderer.on('update-tabs', callback),
    switchTab: (index) => ipcRenderer.send('switch-tab', index)
});
