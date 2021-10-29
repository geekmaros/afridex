import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;
import InlineSvg from "vue-inline-svg";
Vue.component("inline-svg", InlineSvg);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
