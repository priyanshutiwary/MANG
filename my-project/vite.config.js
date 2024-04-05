import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from 'dotenv'

// https://vitejs.dev/config/
env.config()
export default defineConfig({
  server:{
    proxy:{
      // '/api':process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001/'
      '/api':'http://localhost:5001/'
    },

  },
  plugins: [react()],
})
