import TailwindForm from '@tailwindcss/forms'
import Typography from '@tailwindcss/typography'
import tailwindScrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5d86ff',
        night: '#2a2b47',
        danger: '#eb0000',
        warning: '#e5927a'
      }
    }
  },
  plugins: [TailwindForm, Typography, tailwindScrollbar]
}
export default config
