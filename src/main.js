import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./vee-validate";

import VueI18n from "vue-i18n";
import en from "./i18n/en.json";
import ru from "./i18n/ru.json";

Vue.use(VueI18n);

let locale = en;
if (localStorage.getItem("language")) {
  locale = localStorage.getItem("language");
  store.commit("updateLanguage", locale);
} else {
  store.commit("updateLanguage", locale);
}

const i18n = new VueI18n({
  locale: locale,
  messages: {
    en,
    ru,
  },
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
