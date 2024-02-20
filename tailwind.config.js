/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FOUNDERSGROTESK: ["FOUNDERSGROTESK", "cursive"], // Replace with your font name
        NEUEMONTREAL: ["NEUE-MONTREAL", "cursive"],
      },
    },
  },
  plugins: [],
};
