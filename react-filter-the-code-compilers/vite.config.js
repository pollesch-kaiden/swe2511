/**
 *  Class: SWE2511 - React Filter
 *  Names: Kaiden Pollesch, Matthew Schulz
 *  Section: 111
 *  Vite configuration file
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
})