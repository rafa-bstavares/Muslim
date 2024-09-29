/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "verdeClaro": "#d0ffe2",
        "verdeEscuro": "#003213"
      },
      fontFamily: {
        "Questrial": "'Questrial', sans-serif",
        "Montserrat": "'Montserrat', sans-serif",
        "Marhey": "'Marhey', system-ui;",
        "Aref": "'Aref Ruqaa', system-ui;"
      }
    },
  },
  plugins: [],
}

