module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_helpers.scss";
          @import "@/styles/_general.scss";
          `
      },
    }
  }
}
