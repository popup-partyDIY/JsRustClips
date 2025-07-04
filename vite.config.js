import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  base: './', // Ensures proper resolution of /src paths
  build: {
    outDir: 'dist'
  }
});
