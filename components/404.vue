<template>
  <div class="error-404 h-100 w-100">
    <div class="text-center">
      <h1 class="display-1 text-white">{{ error.statusCode }}</h1>
      <h2 class="display-4 text-white">This page doesn’t exist</h2>
      <p class="text-white">The link you clicked on may be broken or no longer exist.</p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.error-404 {
  background-color: #212121;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

h1,h2 {
  font-family: 'Courier New', Courier, monospace;
}
</style>