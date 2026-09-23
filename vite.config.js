import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// IMPORTANT: "base" must match your GitHub repository name so that
// assets load correctly on https://<usuario>.github.io/<repo>/
// If you name your repo something other than "campus-servicios",
// update the value below to match (with slashes on both sides).
export default defineConfig({
  plugins: [react()],
  base: '/campus-servicios/',
})
