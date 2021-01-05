import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import custom from "./util/custom";
// import upperFirst from "lodash/upperFirst";
// import camelCase from "lodash/camelCase";
import "lib-flexible";
import "@/assets/css/main.css";
import VideoPlayer from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";

Vue.use(VideoPlayer);

// const requireComponent = require.context("./views/components", false, /\.vue$/);

// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName);

//   // 获取组件的 PascalCase 命名
//   const componentName = upperFirst(
//     camelCase(
//       // 获取和目录深度无关的文件名
//       fileName
//         .split("/")
//         .pop()
//         .replace(/\.\w+$/, "")
//     )
//   );
//   Vue.component(componentName, componentConfig.default || componentConfig);
// });

Object.keys(custom).forEach(key => {
  Vue.prototype["$" + key] = custom[key];
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
