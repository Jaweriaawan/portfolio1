import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',

        primary : '#1c1c22',
        accent : {
          DEFAULT: '#00ff99',
          hover: '#00e187',
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens : {
            sm : '540px',
            md : '640px',
            lg : '960px',
            xl : '1200px'
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
