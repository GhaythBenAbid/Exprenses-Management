/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {},
  },
  /** @type {import('rippleui').Config} */
	rippleui: {
		themes: [
			
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#10B981",
				},
			},
		],
	},



  darkMode: "media",
  plugins: [
    require('rippleui'),
    require('tailwindcss-hero-patterns'),

  ]
}

