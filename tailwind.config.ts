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
        bg: '#080C12',
        bg2: '#0D1117',
        bg3: '#121820',
        card: '#0F1420',
        cyan: '#00DCB4',
        cyan2: '#00B8FF',
        gold: '#FFB700',
        rose: '#FF4D6D',
        muted: '#5A6A7A',
        'text-main': '#D6E4F0',
        'text2': '#8EA5B8',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
        'typing': 'typing 3.5s steps(40, end) forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.75)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'typing': {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
