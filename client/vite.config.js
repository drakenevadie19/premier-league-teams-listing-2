import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../back-end/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/teams': {
        target: 'http://localhost:3001'
      }
    }
  }
})