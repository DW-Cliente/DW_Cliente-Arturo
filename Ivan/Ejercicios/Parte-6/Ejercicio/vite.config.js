// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        host: '127.0.0.1',  // fuerza IPv4 en este equipo
        port: 5173,
        strictPort: true,
        open: true,
    },
});
