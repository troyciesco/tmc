const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
				sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
				serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
				hw: ["Mynerve", ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/container-queries")
	]
}
