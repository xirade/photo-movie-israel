<template>
  <div>
    <div class="container my-5 animated fadeIn">
      <div class="py-5 d-flex align-items-center flex-center flex-column">
        <h3 class="display-2">Thank you!</h3>
        <p class="h5">for choosing our services</p>
        <img class="animated bounceInLeft" src="~/assets/img/envelope-mail-svgrepo-com.svg" height="150" width="150" alt="envelope">
        <p class="my-5 text-center">We have just sent to your <b>E-mail</b> a letter with complete information about your order</p>
        <router-link tag="a" :to="'/services'">Check out more services</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
 .display-2 {
   font-family: "DINNeuzeitGroteskLTW01-BdCn";
 }

 @media (max-width: 346px) {
   .display-2 {
     font-size: 4em;
   }
 }
</style>