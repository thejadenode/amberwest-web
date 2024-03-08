import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        services: resolve(__dirname, 'src/services.html'),
        about: resolve(__dirname, 'src/about.html'),
        careers: resolve(__dirname, 'src/careers.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        google49fd36799f3f3335: resolve(__dirname, 'src/google49fd36799f3f3335.html'),
      },
    },
  },
  server: {
    port: 8080
  }
}