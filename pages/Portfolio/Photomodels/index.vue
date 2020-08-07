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
        <div id="animateFadeIn_1">
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
        <div class="d-flex justify-content-between">
          <span><a>Back</a></span>
          <h2 class="mx-auto">Photomodels</h2>
        </div>
        <Carousel />
      </div>
    </header>
</template>

<script>
import Carousel from "~/pages/Portfolio/Carousel.vue";
export default {
  data () {
    return {
    }
  },
  components: {
    Carousel
  }
};
</script>

<style lang="scss" scoped>
[data-aos="goLine_portfolio"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 230px;
    opacity: 1;
  }
}
.display-3 {
  font-size: 3.5rem;
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
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
