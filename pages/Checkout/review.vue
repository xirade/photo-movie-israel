<template>
    <div>
      <ErrorPage v-if="success == null" :error="error"/>
      <div v-else class="container my-5 animated fadeIn">
        <div class="py-5 d-flex align-items-center flex-center flex-column">
          <h3 class="display-2">Thank you!</h3>
          <p class="h5">for choosing our services</p>
          <img
            class="animated bounceInLeft"
            src="~/assets/img/envelope.svg"
            height="150"
            width="150"
            alt="envelope"
          />
          <p class="my-5 text-center">
            We have just sent to your <b>E-mail</b> a letter with complete
            information about your order
          </p>
          <router-link tag="a" :to="'/services'"
            >Check out more services</router-link
          >
        </div>
      </div>
    </div>
</template>

<script>
import ErrorPage from "~/components/errors/500.vue";
export default {
  name: "review",
  data() {
    return {
      success: null,
      error: {
        statusCode: 500
      }
    };
  },
  components: {
    ErrorPage
  },
  async mounted() {
    try {
      this.success = await this.$route.params.success;
    } catch (error) {
      this.error = this.$nuxt.error({
        statusCode: 500,
        message: "err message"
      });
    }
  }
};
</script>

<style scoped>
.display-2 {
  font-family: "Oswald", sans-serif;
}

@media (max-width: 346px) {
  .display-2 {
    font-size: 4em;
  }
}
</style>
