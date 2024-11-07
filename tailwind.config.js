module.exports = {
	darkMode: ['class'],
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	  './node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
	  extend: {
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			// Añade más configuraciones de color aquí si es necesario
		  }
		}
	  }
	},
	plugins: [],
  };