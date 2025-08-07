import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  plugins: [react(), tailwindcss()], 
  server: {
    host: true,  // Expose dev server on network IP (0.0.0.0)
    port: 5173,  // Optional: specify the port if you want
  },
})
