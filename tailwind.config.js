/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1E1E1E",
				secondary: "#9B9B9B",
				tertiary: "#F9F9F9",
				custom: {
					100: "#D9D9D9",
					200: "#F2F2F2",
					300: "#F9F9F9",
				},
			},
		},
	},
	plugins: [],
};
