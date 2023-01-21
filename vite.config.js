import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    publicDir: false,
    build: {
        // generate manifest.json in outDir
        manifest: true,
        outDir: "./app/javascript/frontend/",
        rollupOptions: {
            // overwrite default .html entry
            input: './frontend/src/index.tsx',
            output: {
                entryFileNames: "[name].js",
                assetFileNames: "[name][extname]"
            }
        }
    },
    plugins: [react()],
})