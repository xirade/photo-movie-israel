import Vue from "vue";
import App from "~/layouts/default.vue";
import VueRouter from "vue-router";

import Services from "~/pages/Services/index.vue";
import About from "~/pages/About/index.vue";

Vue.use(VueRouter);

const routers = [
  {
    name: "Services",
    path: "/services",
    components: Services
  },
  {
    name: "About",
    path: "/about",
    components: About
  }
];

const router = new VueRouter({mode: 'history', routes: routers})

new Vue ({
    render: h => h(App),
    router
}).$mount('#app')