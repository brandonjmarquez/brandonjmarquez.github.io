/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: ({ opacityVariable, opacityValue}) => {
            if(opacityValue !== undefined) {
              return `rgba(var(--color-custom-100), ${opacityValue})`;
            }

            if(opacityVariable !== undefined) {
              return `rgba(var(--olor-custom-100), var(${opacityValue}, 1))`;
            }
            
            return `rgb(var(--color-custom-100))`;
          },
          200: ({ opacityVariable, opacityValue}) => {
            if(opacityValue !== undefined) {
              return `rgba(var(--color-custom-200), ${opacityValue})`;
            }

            if(opacityVariable !== undefined) {
              return `rgba(var(--color-custom-200), var(${opacityValue}, 1))`;
            }
            
            return `rgb(var(--color-custom-200))`;
          },
          300: ({ opacityVariable, opacityValue}) => {
            if(opacityValue !== undefined) {
              return `rgba(var(--color-custom-300), ${opacityValue})`;
            }

            if(opacityVariable !== undefined) {
              return `rgba(var(--color-custom-300), var(${opacityValue}, 1))`;
            }
            
            return `rgb(var(--color-custom-300))`;
          },
          400: ({ opacityVariable, opacityValue}) => {
            if(opacityValue !== undefined) {
              return `rgba(var(--color-custom-400), ${opacityValue})`;
            }

            if(opacityVariable !== undefined) {
              return `rgba(var(--color-custom-400), var(${opacityValue}, 1))`;
            }
            
            return `rgb(var(--color-custom-400))`;
          },
        }
      },
      animation: {
        'roulette': 'roulette .4s linear infinite',
      },
      translate: {
        'page-0': '0',
        'page-1': '-100vw',
        'page-2': '-200vw',
        'page-3': '-300vw',
        'page-4': '-400vw',
      },
    },
  },
  plugins: [],
}

