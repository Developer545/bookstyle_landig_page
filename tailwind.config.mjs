export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold:   { DEFAULT: '#9e8a78', dark: '#7a6a5a', light: '#bfad9f' },
        dark:   { DEFAULT: '#222227', light: '#2e2e35', lighter: '#3a3a42' },
        cream:  { DEFAULT: '#fcf9f5', dark: '#f0ebe3' },
        muted:  '#777',
      },
      fontFamily: {
        heading: ['Prata', 'Georgia', 'serif'],
        sans:    ['Lato', 'system-ui', 'sans-serif'],
        ui:      ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
