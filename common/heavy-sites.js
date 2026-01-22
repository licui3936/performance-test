// Common module to load heavy sites configuration

// Heaviest sites (most requests, largest page size, most resources):
// CNN.com - Typically 200-400+ requests, 5-8 MB page weight, heavy video content, numerous ads and tracking scripts
// ESPN.com - Similar to CNN, 150-300+ requests, 4-6 MB, many images, videos, and sports widgets
// YouTube.com - 100-200 requests, 3-5 MB, heavy JavaScript framework, video player resources
// Amazon.com - 150-250 requests, 4-6 MB, product images, tracking, A/B testing scripts
// Lightest sites:
// Wikipedia.org - ~20-40 requests, 400-800 KB, minimal JavaScript, primarily text/images
// Reddit.com - ~50-100 requests, 1-2 MB (varies by new/old design)

// Heavy sites data
const HEAVY_SITES_1 = [
    "https://www.wikipedia.org",
    "https://www.cnn.com",
    "https://www.amazon.com",
    "https://www.bbc.com",
    "https://www.youtube.com",
    "https://www.reddit.com",
    "https://www.nytimes.com",
    "https://www.theguardian.com",
    "https://www.espn.com",
    "https://www.imdb.com"
];

const HEAVY_SITES_2 = new Array(10).fill("https://www.cnn.com");


// Universal loader - returns sites list
async function loadHeavySites() {
    return HEAVY_SITES_1;
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadHeavySites };
}

// Make function globally available for both browser and Node.js
globalThis.loadHeavySites = loadHeavySites;
