import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://warhammer.jarrodscherer.au",
    image: {
        domains: ["images.jarrodscherer.au"],
        service: {
            entrypoint: "./src/image-service.ts",
        },
    },
});