import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import laravel from "vite-plugin-laravel";
import vue from "@vitejs/plugin-vue";
import inertia from "./resources/scripts/vite/inertia-layout";
const path = require("path");

const config = ({ mode }) => {
    return defineConfig({
        base: mode !== "production" ? "/build/" : "/@vite/",
        plugins: [
            inertia(),
            vue(),
            laravel({
                postcss: [tailwindcss(), autoprefixer()],
            }),
        ],
        server: {
            host: "0.0.0.0",
            port: 3000,
            watch: {
                usePolling: true,
            },
        },
        resolve: {
            alias: {
                "@res": path.resolve(__dirname, "./resources/scripts"),
            },
        },
    });
};

export default config;
