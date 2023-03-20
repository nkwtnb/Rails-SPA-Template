import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    publicDir: false,
    build: {
        // generate manifest.json in outDir
        manifest: true,
        outDir: "./../app/assets/frontend/",
        rollupOptions: {
            // overwrite default .html entry
            input: './src/index.tsx',
            output: {
                // entryFileNames: "[name].js",
                // assetFileNames: "[name][extname]"
                entryFileNames: "frontend.js",
                assetFileNames: "frontend[extname]"
            }
        }
    },
    server: {
        watch: {
            usePolling: true
        }
    },
    plugins: [react()],
})