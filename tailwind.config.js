/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge:{
  //   content: ['./modules/**/*.{js,ts,jsx,tsx,mdx}'],
  //   options: {
      
  //     whitelist: ['text-violet-800'],
  //   },
  // },
  darkMode: 'class',
  safelist: [ 
    {
    pattern: /text-(emerald|violet|orange|slate|gray)-(500)/,
    }
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
