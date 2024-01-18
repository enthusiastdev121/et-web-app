module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1p": "1px",
        "5v": "5vw",
        "10v": "10vw",
        "15v": "15vw",
        "20v": "20vw",
        "80v": "80vw",
        "80vh": "80vh",
        "20pr": "20%",
        "30pr": "30%",
        "40pr": "40%",
        "50pr": "50%",
      },
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1050px",
      xl: "1340px",
      "2xl": "1680px",
      "2.5xl": "1800px",
      "3xl": "1900px",
    },
    gridTemplateRows: {
      9: "repeat(9, minmax(0, 1fr))",
    },

    minHeight: {
      "60v": "60vh",
      "70v": "70vh",
      "80v": "80vh",
      "90v": "90vh",
      "100v": "100vh",
    },
    minWidth: {
      "1/6": "16.66%",
      "2/6": "33.33%",
      "3/6": "50%",
      "4/6": "66.66%",
      "5/6": "83.33%",
    },
    backgrounds: {
      NewSignupTheme: "red",
    },
  },
  plugins: [],
};
