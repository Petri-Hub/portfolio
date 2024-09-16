/**
 * Tailwind CSS files and theme extension configuration.
 * @type {import('tailwindcss').Config} The configuration type.
 */
export default {
	content: [
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
   ],
	theme: {
		colors: {
			primary: '#EDEDED',
			secondary: '#000000',
			third: '#A1A1A1',
         fourth: '#FFFFFF',
			link: '#2E7CD8'
		}
	}
}
