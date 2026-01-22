import { defineConfig } from 'vite';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [
        nodePolyfills({
            include: ['buffer', 'stream', 'util', 'events'],
            globals: {
                Buffer: true,
                global: true,
                process: false
            }
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'workspace-platform-wrapper.js'),
            name: 'WorkspacePlatform',
            fileName: 'workspace-platform.bundle',
            formats: ['es']
        },
        outDir: 'dist',
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    },
    define: {
        'process.env': {}
    }
});
