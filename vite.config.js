
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/a-letter-to-lala/',
  plugins: [vue(), tailwindcss()],
})