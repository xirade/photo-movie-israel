<template>
  <div>
    <Header />
      <Loading />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Loading from "~/components/Loading.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    Loading,
  },
};
</script>

<style>
a:active {
  color: rgba(255, 235, 59, 0.7) !important;
}
</style>
