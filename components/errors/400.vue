<template>
  <div class="error-400 h-100 w-100">
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
      default: () => {},
    },
  },
};
</script>

<style scoped>
.error-400 {
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