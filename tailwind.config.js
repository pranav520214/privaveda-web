/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './three/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F1E9',       // Primary Ivory
        paper: '#E9E5DB',        // Warm Paper
        ink: '#121715',          // Primary Ink
        graphite: '#38413D',     // Graphite
        muted: '#747C78',        // Muted
        teal: {
          DEFAULT: '#236E67',    // Privaveda Teal
          dark: '#103B36',       // Deep Teal
          soft: '#A6C4BC',       // Biological Green
        },
        comp: {
          bg: '#06100E',         // Computational Black
          panel: '#0B1715',
          border: 'rgba(166, 196, 188, 0.12)',
        },
        hairline: 'rgba(18, 23, 21, 0.13)',
        'hairline-dark': 'rgba(255, 255, 255, 0.10)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        none: '0px',
        sm: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
      },
    },
  },
  plugins: [],
};
