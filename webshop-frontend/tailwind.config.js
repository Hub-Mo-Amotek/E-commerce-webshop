/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      // here we can paste custom css like colors for example that we all are going to use
      //example
      // nighty: "#121063",
      // whity: "#ffffff",
      "color-one": "#accbee",
      "color-two": "#e7f0fd",
      "color-nerdy": "#0091ea",

      "color-red": "#FF0000",
      "color-green": "#00FF00",
      "color-orange": "#FFA500",

    },
  },
  },
  plugins: [],
}
