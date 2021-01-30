<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error408 from "~/components/errors/400.vue";
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
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      switch (this.error.statusCode) {
        case 400:
          return error400;
        case 401:
          return error401;
        case 403:
          return error403;
        case 404:
          return error404;
        case 500:
          return error500;
        case 503:
          return error503;
        default:
          break;
      }
      // catch everything else
      
    },
  },
};
</script>
