<template>
  <div class="error-403 h-100 w-100">
    <div class="text-center">
      <h1 class="display-1 text-white">{{ error.statusCode }}</h1>
      <h2 class="display-4 text-white">Access forbidden</h2>
      <p class="text-white">
        The page or resource you were trying to reach is absolutely forbidden
        for some reason
      </p>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: "error-403",
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.error-403 {
  background-color: #212121;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99999;
  align-items: center;
  justify-content: center;
}

h1,
h2 {
  font-family: "Courier New", Courier, monospace;
}
</style>
