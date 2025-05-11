import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import ghPages from 'vite-plugin-gh-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/digital-portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
