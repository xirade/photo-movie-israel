<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error400 from "~/components/errors/400.vue";
import error401 from "~/components/errors/401.vue";
import error403 from "~/components/errors/403.vue";
import error404 from "~/components/errors/404.vue";
import error500 from "~/components/errors/500.vue";
import error503 from "~/components/errors/503.vue";
export default {
  name: "nuxt-error",
  layout: "default", // optional
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 500) {
        return error500;
      }
      if (this.error.statusCode === 400) {
        return error400;
      }
      if (this.error.statusCode === 401) {
        return error401;
      }
      if (this.error.statusCode === 403) {
        return error403;
      }
      if (this.error.statusCode === 404) {
        return error404;
      }
      if (this.error.statusCode === 503) {
        return error503;
      }

      // catch everything else
    }
  }
};
</script>
