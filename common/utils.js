// Utility functions for performance testing

/**
 * Calculate statistics from performance measures
 * @param {Array} measureArray - Array of performance measures
 * @param {Array} tags - Optional array of tags to filter measures by
 * @returns {Object|null} Statistics object with total, avg, min, max, and count
 */
// function calcStats(measureArray, tags) {
//     let measureArrayTag = measureArray;
//     if (tags && tags.length > 0) {
//         measureArrayTag = measureArray.filter(m => tags.every(tag => m.name.includes(tag)));
//     }
//     if (measureArrayTag.length === 0) {
//         return null;
//     }
//     const minStart = Math.min(...measureArrayTag.map(m => m.startTime));
//     const maxEnd = Math.max(...measureArrayTag.map(m => m.startTime + m.duration));
//     const total = maxEnd - minStart;

//     const durations = measureArrayTag.map(m => m.duration);
//     const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
//     const min = Math.min(...durations);
//     const max = Math.max(...durations);
//     return { total, avg, min, max, start: minStart, end: maxEnd, count: durations.length };
// }

// // Make functions globally available for browser
// globalThis.calcStats = calcStats;


function pad(n, length = 5) {
    let text = n.toString();
    while (text.length < length) {
        text = ' ' + text;
    }
    return text;
}

function sleep(delay) {
    console.log('SLEEPING FOR', delay);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('......');
            resolve();
        }, delay);
    });
}

globalThis.sleep = sleep;

const Perfs = {

    _data: null,
    _stats : [],
    _summaryText: '',

    reset: () => {
        Perfs._stats = [];
        Perfs._data = null;
        Perfs._summaryText = '';
    },

    startOpen: (testName, count, delay) => {
        const now = Perfs._now();
        console.log(`[${now.display}] START opening "${testName}" (${count} windows)`);
        Perfs._data = { testName: `Opening ${count} ${testName}`, count, delay, measures: {}, summary: {} };
        Perfs._data.origin = now.time;
    },

    startClose: (count) => {
        const now = Perfs._now();
        Perfs._data = { testName: `Closing ${count} Windows`, count, measures: {}, summary: {} };
        console.log(`[${now.display}] START closing`);
        Perfs._data.origin = now.time;
    },

    creating: (windowName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        measure.origin = now.time;
        console.log(`[${now.display}] Creating Window: ${windowName}`);
    },

    created: (windowName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        const time = now.time - measure.origin;
        measure.created = time;
        console.log(`[${now.display}][+${pad(time)}] Window Created: ${windowName}`);
    },

    windowEvent: (windowName, eventName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        const time = now.time - measure.origin;
        measure['Window-'+eventName] = time;
        console.log(`[${now.display}][+${pad(time)}] Event: ${windowName} - window:${eventName}`);
        measure.loaded = time;
    },

    viewEvent: (windowName, eventName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        const time = now.time - measure.origin;
        measure['View-'+eventName] = time;
        console.log(`[${now.display}][+${pad(time)}] Event: ${windowName} - view:${eventName}`);
        measure.loaded = time;
    },

    closing: (windowName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        measure.origin = now.time;
        console.log(`[${now.display}] Closing Window: ${windowName}`);
    },

    closed: (windowName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        const time = now.time - measure.origin;
        measure.closed = time;
        console.log(`[${now.display}][+${pad(time)}] Window Closed: ${windowName}`);
    },

    log: (windowName, eventName) => {
        const now = Perfs._now();
        const measure = Perfs._get(windowName);
        const time = now.time - measure.origin;
        console.log(`[${now.display}][+${pad(time)}] Log: ${windowName} - ${eventName}`);
    },

    doneOpen: () => {
        const now = Perfs._now();
        const data = Perfs._data;
        const time = now.time - data.origin;
        // data.doneOpen = time;
        delete data.origin;
        console.log(`[${now.display}][+${pad(time)}] DONE Opening`);
        Perfs._computeStats();
    },

    doneClose: () => {
        const now = Perfs._now();
        const data = Perfs._data;
        const time = now.time - data.origin;
        // data.doneClose = time;
        delete data.origin;
        console.log(`[${now.display}][+${pad(time)}] DONE Closing`);
        Perfs._computeStats();
    },

    _computeStats: () => {

        const data = Perfs._data;
        const measures = Perfs._data.measures;
        const measuresArray = Object.values(measures);

        const summary = [];

        const created = measuresArray.map(measure => measure.created).filter(v => v !== undefined);
        if (created.length) {
            const maxCreated = Math.max(...created);
            const avgCreated = Math.round(maxCreated / created.length);
            summary.push(`${data.testName} - Time to create ${created.length} windows: ${maxCreated} ms (avg: ${avgCreated} ms)`);
            data.summary.totalCreationTime = maxCreated;
            data.summary.averageCreationTime = avgCreated; 
        }

        const loaded = measuresArray.map(measure => measure.loaded).filter(v => v !== undefined);
        if (loaded.length) {
            const maxLoaded = Math.max(...loaded);
            const avgLoaded = Math.round(maxLoaded / loaded.length);
            summary.push(`${data.testName} - Time to load ${loaded.length} windows: ${maxLoaded} ms (avg: ${avgLoaded} ms)`);
            data.summary.totalLoadingTime = maxLoaded;
            data.summary.averageLoadingTime = avgLoaded; 
        }

        const closed = measuresArray.map(measure => measure.closed).filter(v => v !== undefined);
        if (closed.length) {
            const maxClosed = Math.max(...closed);
            const avgClosed = Math.round(maxClosed / closed.length);
            summary.push(`${data.testName} - Time to close ${closed.length} windows: ${maxClosed} ms (avg: ${avgClosed} ms)`);
            data.summary.totalClosingTime = maxClosed;
            data.summary.averageClosingTime = avgClosed;
        }

        data.summary.testName = data.testName;

        Perfs._summaryText = summary;
        console.log('SUMMARY:', Perfs._summaryText);

        // console.log('DATA:', Perfs._data);

        Perfs._stats.push(Perfs._data);
        // console.log(`STATS:`, Perfs._stats);
    },

    stats: () => {
        return Perfs._stats;
    },

    summary: () => {
        return Perfs._summaryText;
    },

    _now: () => {
        const time = Math.round(performance.now());
        return {
            time,
            display: `${pad(time)}`
        }
    },

    _get: (windowName) => {
        let measure = Perfs._data.measures[windowName];
        if (!measure) {
            measure = Perfs._data.measures[windowName] = {};
        }
        return measure;
    },
}

globalThis.Perfs = Perfs;