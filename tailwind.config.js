/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fb8500: '#fb8500',
        sun: {
          400: '#ffb81c',
          500: '#fb8500',
          600: '#e67300',
        },
        peach: {
          50: '#fffbf5',
          100: '#ffedd5',
          200: '#fed7aa',
        },
        ink: {
          DEFAULT: '#1e293b',
          soft: '#64748b',
        },
        coral: {
          500: '#ef4444',
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
