import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'charts': ['recharts'],
          'state': ['zustand', '@tanstack/react-query'],
          'ui': ['framer-motion', 'lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 700
  }
})
