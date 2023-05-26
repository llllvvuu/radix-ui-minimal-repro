import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: [
      'src/**/*.test.jsx',
    ],
    environmentMatchGlobs: [
      ['src/**/*.test.jsx', 'happy-dom'],
    ],
  },
})

