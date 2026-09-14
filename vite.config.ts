import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    // GEMINI_API_KEY is intentionally NOT injected into the client bundle.
    // It's read server-side only, in api/analyze-batch.ts, via
    // process.env.GEMINI_API_KEY at request time. Baking it in here would
    // ship it to every visitor's browser in the built JS.
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
