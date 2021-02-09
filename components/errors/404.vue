<template>
  <div class="typerror w-100">
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
h1,h2 {
  font-family: 'Courier New', Courier, monospace;
}
</style>