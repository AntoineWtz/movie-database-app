module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js", "./src/**/*.tx", "./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
    },
  },
};