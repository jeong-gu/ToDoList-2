import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/ToDoList-2/' : '/', // dev/prod 분기
}))