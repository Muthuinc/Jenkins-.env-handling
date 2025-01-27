import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000', // Proxy requests to the backend server
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',  // Main entry file (your landing page)
        login: './login.html',  // Login page
        signup: './signup.html',  // Signup page
      },
    },
  },
});
