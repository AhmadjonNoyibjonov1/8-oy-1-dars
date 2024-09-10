/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 8px 25px 0px #0D0A2C0F',
      },
    },
  },
  plugins: [],
  plugins: [require("daisyui")],
 
};
