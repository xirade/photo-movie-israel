<template>
  <div>
    <div class="container my-5 animated fadeIn">
      <div class="py-5 d-flex align-items-center flex-center flex-column">
        <h3 class="display-2">Thank you!</h3>
        <p class="h5">for choosing our services</p>
        <img
          class="animated bounceInLeft"
          :src="require('~/assets/img/envelope.svg')"
          height="150"
          width="150"
          alt="envelope"
        />
        <p class="my-5 text-center">
          We have just sent to your <b>E-mail</b> a letter with complete
          information about your order
        </p>
        <NuxtLink to="/services">Check out more services</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "review",
  asyncData({ i18n, redirect, route, error }) {
    try {
      const success = route.params.success;
      if (success != undefined) {
        return {
          success: success
        };
      } else {
        redirect(`${i18n.locale == "en" ? "/" : "/" + i18n.locale}`);
      }
    } catch (e) {
      error({
        statusCode: 500,
        message: "err message"
      });
    }
  }
};
</script>

<style scoped>

@media (max-width: 346px) {
  .display-2 {
    font-size: 4em;
  }
}
</style>
