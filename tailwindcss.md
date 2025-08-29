Tailwindcss 4 in React 19

1. npm install tailwindcss @tailwindcss/vite


2. setup vite config file

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), tailwindcss()],
});


3. import index.css file

/* src/index.css */
@import "tailwindcss";