<template>
  <div>
    <header>
      <img
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/e_shadow:5/v1596052405/4log_ybzwgi.png"
        height="120px"
        width="250px"
        class="mx-auto mt-4 d-block"
        alt="Logo"
      />

      <div class="service mt-4 position-relative">
        <div id="animateFadeIn_1">
          <span
            class="active_line_1"
            data-aos="goLine_service"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
        </div>
      </div>
      <div class="bg-white container text-black d-flex justify-content-end">
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 font-weight-bolder yellow-text">01</p>
          <h2 class="display-3 pl-2 font-weight-bold">SERVICE</h2>
        </div>
      </div>
    </header>

    <main>
      <div
        class="container bg-light text-black"
        style="max-width: 100%; height: 110vh;"
      >
        <div
          class="d-flex align-items-center flex-center flex-column"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <h2
            class="display-1 text-center mx-auto mt-auto m-0 mb-5"
            style="color: #454545;"
          >
            <strong>
              AFFORDABLE PRICES,
              <hr class="m-0" style="border: 0;" />
              GREAT RESULTS
            </strong>
          </h2>
          <p
            class="h5 w-75 text-center grey-text mb-auto"
            style="font-weight: lighter;"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            est vitae suscipit, eligendi et tempora reprehenderit odio. Saepe
            animi, aliquid voluptates culpa provident, suscipit laudantium
            dignissimos hic, dolorum explicabo dolorem? Enim architecto
            obcaecati, nihil, dolore iure repellendus eligendi aut corrupti
            magnam magni laborum. Eum doloremque culpa minima? Laborum, ipsum
            doloribus.
          </p>
        </div>
      </div>
      <div class="second jarallax">
        <img
          src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970345/0032_z18xq2.jpg"
          class="jarallax-img"
          style="object-fit: cover;"
        />
      </div>
        <div style="max-height:100%;" class="section-cards bg-white position-relative">
             <span
      class="active_line_1"
      data-aos="goLine_xsmall"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
    ></span>
          <div class="container d-flex align-items-center flex-center flex-column" style="padding-top: 150px;">
            <h2 class="h1 my-auto text-center animated pulse infinite">BOOK NOW</h2>
            <serviceCards class="mb-auto" />
          </div>
        </div>
    </main>
  </div>
</template>

<script>
import serviceCards from './services_cards';
import Vue from "vue";
import AOS from "aos";
export default {
  components: {
    serviceCards
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/aos/src/sass/aos.scss";
@import "~/assets/css/main.css";
@font-face {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
  src: url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.eot");
  src: url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.eot?#iefix")
      format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.woff2")
      format("woff2"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.woff")
      format("woff"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.ttf")
      format("truetype"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.svg#DINNeuzeitGroteskLTW01-BdCn")
      format("svg");
}

h2 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.section-cards {
  height: 120vh;
}

.active_line_1 {
  width: 4px;
  top: 0;
  position: absolute;
  left: 50%;
  opacity: 1;
  overflow: hidden;
  background-color: rgba(255, 196, 46, 0.8);
}

[data-aos="goLine_service"] {
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
    height: 60px;
    opacity: 1;
  }
}

.display-3 {
  font-size: 3.5rem;
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.display-1 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.second {
  height: 70vh;
}

@media (min-width: 426px) and (max-width: 575px){
  .section-cards{
    height: 285vh !important;
  }
}


@media (max-width: 575px) {
  .display-1 {
    font-size: 2.7rem;
  }
  .display-3 {
    font-size: 2rem;
  }
  .h5{
    font-size: 0.8rem;
  }
  .section-cards{
    height: 250vh;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2.5rem;
  }
  .display-1 {
    font-size: 3rem;
  }
    .h5{
    font-size: 1rem;
  }
  .section-cards{
    height: 280vh;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .display-1 {
    font-size: 4rem;
  }
  .display-3 {
    font-size: 3.5rem;
  }
  .h5{
    font-size: 1.2rem;
  }
   .section-cards{
    height: 120vh;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
   .section-cards{
    height: 120vh;
  }
}
</style>
