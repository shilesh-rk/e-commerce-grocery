import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/styles/variables.scss";`, // Optional: Import your variables or other SCSS files
  //     },
  //   },
  // },
})
