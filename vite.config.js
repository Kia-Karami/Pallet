import { defineConfig } from 'vite'

export default defineConfig({
  // Root directory for the project
  root: '.',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  // Development server configuration
  server: {
    port: 3000,
    host: true,
    open: true
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  },
  
  // CSS configuration
  css: {
    devSourcemap: true
  },
  
  // Base public path
  base: './'
})