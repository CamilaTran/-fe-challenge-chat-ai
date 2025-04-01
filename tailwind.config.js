// tailwind.config.js
const config = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        boxShadow: {
          subtle: '0 1px 2px 0 rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.10)',
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  