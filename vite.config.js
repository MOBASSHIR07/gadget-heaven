import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group React-related dependencies
          'react-vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            '@remix-run/router'
          ],
          // Group icon libraries
          'icons': ['react-icons'],
          // Group utility libraries
          'utils': ['react-hot-toast', 'sweetalert2'],
          // Separate your own components
          'components': [
            './src/components/ShowCart',
            './src/components/OtherLargeComponent'
          ]
        }
      }
    }
  }
});