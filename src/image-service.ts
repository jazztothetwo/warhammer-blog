import passthrough from "astro/assets/services/noop";

export default {
    ...passthrough,
    getURL(options: Parameters<typeof passthrough.getURL>[0]) {
        if (typeof options.src === "string") {
            return options.src;
        }

        return options.src.src;
    },
};