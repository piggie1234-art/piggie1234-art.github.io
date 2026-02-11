import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures assets are loaded via relative paths, 
  // which prevents 404 errors when deployed to a sub-path on GitHub Pages.
  base: './', 
})