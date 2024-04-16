/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
      'times-new-roman': ['Times New Roman', 'serif'],
    },
      keyframes: {
        'flip-scale-up-hor': {
          '100%': {
            '-webkit-transform': 'scale(1) rotateX(0)',
                    'transform': 'scale(1) rotateX(0)',
          },
          '50%': {
            '-webkit-transform': 'scale(2.5) rotateX(-90deg)',
                    'transform': 'scale(2.5) rotateX(-90deg)',
          },
          '0': {
            '-webkit-transform': 'scale(1) rotateX(-180deg)',
                    'transform': 'scale(1) rotateX(-180deg)',
          },
        },
      },
    },
  },
  plugins: [],

}
