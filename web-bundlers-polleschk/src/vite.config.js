/*
 * Class: SWE2511 - Calculator
 * Name: Kaiden Pollesch
 * Class Section: 111
 * Vite config js File
 */


import { defineConfig } from 'vite';

export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
            }
        }
    },
});