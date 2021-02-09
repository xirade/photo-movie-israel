<template>
  <div class="typerror w-100">
    <div class="text-center">
      <h1 class="display-1 text-white">{{ error.statusCode }}</h1>
      <h2 class="display-4 text-white">Service unavailable</h2>
      <p class="text-white">Looks like we're having some server issues...</p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "error-503",
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-family: "Courier New", Courier, monospace;
}
</style>
