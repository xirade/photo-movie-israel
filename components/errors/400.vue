<template>
  <div class="typerror w-100">
    <div class="text-center">
      <h1 class="display-1 text-white">{{ error.statusCode }}</h1>
      <h2 class="display-4 text-white">Bad Request</h2>
      <p class="text-white">Your request resulted in an error</p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "error-400",
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
