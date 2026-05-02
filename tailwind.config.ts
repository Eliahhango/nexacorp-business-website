import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
        accent: '#3B82F6',
        highlight: '#F59E0B',
        surface: '#EFF6FF',
        'text-on-dark': '#FFFFFF',
        'text-primary': '#0A1F44',
        'text-muted': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config