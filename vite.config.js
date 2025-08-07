import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/exp-rating/', // обов’язково: назва репозиторію
  server: {
    host: true,
  },
});
