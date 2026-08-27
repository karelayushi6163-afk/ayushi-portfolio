/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens that flip automatically with the .light class
        // (see CSS variables in index.css) — use these for any text/background
        // that must remain readable in both themes.
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        fg: {
          DEFAULT: 'rgb(var(--fg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--fg-secondary) / <alpha-value>)',
          muted: 'rgb(var(--fg-muted) / <alpha-value>)',
          faint: 'rgb(var(--fg-faint) / <alpha-value>)',
        },
        ink: {
          950: '#070A11',
          900: '#0A0E17',
          800: '#10151F',
          700: '#161C29',
          600: '#1E2635',
          500: '#2A3346',
        },
        mist: {
          100: '#F4F6FB',
          200: '#E7EAF2',
          300: '#C7CDDD',
          400: '#8B93A7',
          500: '#6B7386',
        },
        signal: {
          blue: '#5B8DEF',
          indigo: '#7C6CF2',
          violet: '#9B6CF2',
          teal: '#45D6C4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(139,147,167,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(139,147,167,0.06) 1px, transparent 1px)',
        'aurora-glow':
          'radial-gradient(circle at 20% 20%, rgba(91,141,239,0.20), transparent 45%), radial-gradient(circle at 80% 0%, rgba(155,108,242,0.16), transparent 40%), radial-gradient(circle at 50% 100%, rgba(69,214,196,0.10), transparent 45%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(91,141,239,0.45)',
        'glow-violet': '0 0 40px -10px rgba(155,108,242,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
      },
    },
  },
  plugins: [],
}
