/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        destinationbg: "url('./assets/destination/background-destination-desktop.jpg')",
        crewbg: "url('./assets/crew/background-crew-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
