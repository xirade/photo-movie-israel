<template>
  <div id="app">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
a:active {
  color: rgba(255, 235, 59, 0.7) !important;
}
</style>
