// Preload script to expose IPC to renderer process

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendCommand: (action, value) => ipcRenderer.send('command', action, value),
    getPerformanceData: () => ipcRenderer.invoke('get-performance-data'),
    onStatusUpdate: (callback) => ipcRenderer.on('status-update', (event, status) => callback(status))
});
