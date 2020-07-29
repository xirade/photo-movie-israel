<template>
  <div id="app">
    <Header />
    <keep-alive>
      <router-view>
          <nuxt />
      </router-view>
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
a:active {
  color: rgba(255, 235, 59, 0.7) !important;
}
</style>
