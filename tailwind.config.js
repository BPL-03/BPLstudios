/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a09',
        'bg-alt': '#0f0f0d',
        surface: '#111110',
        accent: '#D8FF00', // Lime/neon yellow
        gold: '#c9a84c',
        'gold-dim': '#8a6a28',
        'text-primary': '#e8e6de',
        'text-muted': '#7a7870',
        'text-ghost': '#3a3a34',
      },
      spacing: {
        section: '120px',
        large: '64px',
        medium: '32px',
        small: '16px',
        'hero-gap': '80px',
        'comp-gap': '32px',
      },
      fontSize: {
        'hero-title': ['64px', { lineHeight: '0.95', fontWeight: '300' }],
        'section-title': ['52px', { lineHeight: '1', fontWeight: '300' }],
        body: ['14px', { lineHeight: '1.6' }],
        label: ['11px', { letterSpacing: '0.12em' }],
      },
      fontFamily: {
        sans: ['"Anek Gujarati"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        aclonica: ['"Aclonica"', 'sans-serif'],
        'anek-devanagari': ['"Anek Devanagari"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
