// AOS Scroll (placed here so it can be overidden)
import AOS from "aos";
import "aos/dist/aos.css";

// VUE
import Vue from "vue";
import App from "./App.vue";

// Normalise css
import "normalize.css";

// Polyfill to enable smooth scroll
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

// Vue-typed-js component
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

// FontAwesome imports
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Adding all icons
library.add(fas, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  created: function() {
    AOS.init();
  }
}).$mount("#app");
