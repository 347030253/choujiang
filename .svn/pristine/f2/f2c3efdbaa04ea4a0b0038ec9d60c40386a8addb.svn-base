const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  devServer: {
    port: 8020
  },
  chainWebpack: config => {
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks: "all"
    });
    config.externals({
      vue: "Vue",
      axios: "axios",
      echarts: "echarts",
      "element-ui": "ELEMENT"
    });
    config.module
      .rule("css")
      .test(/\.css$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem")
      .loader("px2rem-loader")
      .options({
        remUnit: 192
      });
    config.resolve.alias.set("images", resolve("src/assets/images"));
  }
};
