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

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}
/* Handle */
::-webkit-scrollbar-thumb {
    background:rgba(255, 196, 46, 0.8); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4); 
}

a:active {
  color: rgba(255, 235, 59, 0.7) !important;
}
</style>
