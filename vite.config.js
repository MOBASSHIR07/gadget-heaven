import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 1. React core chunks
          'react-vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            '@remix-run/router'
          ],
          // 2. Icon library chunk
          'icons': ['react-icons'],
          // 3. Utility libraries chunk
          'utils': ['react-hot-toast', 'sweetalert2']
          // (Removed components chunk)
        }
      }
    }
  }
});