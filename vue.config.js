module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/main.scss";
        `
      }
    }
  }
};
