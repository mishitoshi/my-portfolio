module.exports = {
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "src/main.js",
      title: "mishitoshi's Portfolio"
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/stylesheets/prepends.scss";'
      }
    }
  }
};
