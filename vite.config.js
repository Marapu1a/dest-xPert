import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Это алиас для папки src
      '@assets': path.resolve(__dirname, './src/assets'), // Алиас для изображений
      '@pages': path.resolve(__dirname, './src/pages'), // Алиас для pages
      '@components': path.resolve(__dirname, './src/components'), // Алиас для components
    },
  },
});
