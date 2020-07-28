<template>
  <div id="app">
    <Header />
    <div>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Cloudinary from "cloudinary-vue";
Vue.use(Cloudinary, {
  configuration: {
    cloudName: "demo"
  }
});
import Vue from "vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  es: "#app",
  components: {
    Header,
    Footer,
    Vue
  }
};
</script>

<style>
a:active {
  color: rgba(255, 235, 59, 0.7) !important;
}
</style>
