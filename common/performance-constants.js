// Performance measurement constants
// Used across OpenFin and Electron tests to ensure consistent naming
const MEASURE_TYPES = {
    CREATE_FUNCTION: 'creation-function',
    CREATE_WINDOW_LOADING: 'creation-window-loading',
    CREATE_WINDOW_LOADING_TIME: 'creation-window-loading-time',
    CREATE_VIEW_LOADING: 'creation-view-loading',
    CREATE_VIEW_LOADING_TIME: 'creation-view-loading-time',
    CREATE_LOADING_TIME: 'creation-loading-time',
    CREATE_TIME: 'creation-time',
    CLOSE_FUNCTION: 'close-function',
    CLOSED_EVENT: 'closed-event',
    CLOSE_TIME: 'close-time'
};

const MEASURE_EVENT_DELAY = 15000; // milliseconds

// Make available globally for both browser and Node.js
globalThis.MEASURE_TYPES = MEASURE_TYPES;
globalThis.MEASURE_EVENT_DELAY = MEASURE_EVENT_DELAY;

globalThis.LONG_DELAY = 30000;
globalThis.SHORT_DELAY = 5000;