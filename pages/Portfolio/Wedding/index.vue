<template>
    <header class="header-main d-flex flex-column">
      <img
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596646320/000_apiqou_bznbq5.png"
        height="120px"
        width="250px"
        class="mx-auto mt-5"
        alt="Logo"
      />

      <div class="service mt-4 position-relative">
        <div id="animateFadeIn_2">
          <span
            class="active_line_1"
            data-aos="goLine_portfolio"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
        </div>
      </div>
      <div class="bg-white container text-black d-flex justify-content-end">
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 font-weight-bolder yellow-text">04</p>
          <h2 class="display-3 pl-2 font-weight-bold">PORTFOLIO</h2>
        </div>
      </div>
      <div class="py-5 bg-dark position-relative">
        <div class="container mt-4 d-flex flex-center justify-content-center">
          <span class="mr-auto"><router-link class="h4 text-uppercase" style="text-decoration: none; color: #6c757d;"  
          tag="a" :to="'/Portfolio'">Back</router-link></span>
          <h2 class="h2 white-text mr-auto text-center pr-5">Wedding</h2>
        </div>
        <WeddingImages />
      </div>
       <div class="position-relative">
        <span
            class="active_line_1"
            data-aos="goLine_xsmall"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
    </div>
    </header>
</template>

<script>
import WeddingImages from '~/pages/Portfolio/Wedding/weddingImages.vue';
export default {
  data () {
    return {
    }
  },
  components: {
      WeddingImages
  }
};
</script>

<style lang="scss" scoped>
.active_line_1 {
  width: 4px;
  top: 0;
  position: absolute;
  left: 50%;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(255, 196, 46, 0.8);
}

[data-aos="goLine_portfolio"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 230px;
    opacity: 1;
  }
}
[data-aos="goLine_xsmall"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 40px;
    opacity: 1;
  }
}

.h2, .h4, .display-3 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.h4:hover {
  color: white !important;
}

.display-3 {
  font-size: 3.5rem;
}
@media (max-width: 575px) {
  .display-3 {
    font-size: 2rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .display-3 {
    font-size: 3.5rem;
  }
}
</style>
