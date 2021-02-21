<template>
  <div>
    <div v-if="error"></div>
    <div v-else>
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
            data-aos="goLine_service"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
        </div>
      </div>
      <div class="bg-white container text-black d-flex justify-content-end">
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 font-weight-bolder yellow-text">01</p>
          <h2 class="display-3 pl-2 font-weight-bold">SERVICES</h2>
        </div>
      </div>
    </header>

    <main>
      <div
        class="container bg-light text-black"
        style="max-width: 100%;"
      >
        <div
          class="d-flex py-5 align-items-center flex-center flex-column"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <div class="container my-5 py-5 text-center mx-auto">
            <h2 class="display-1 mt-auto mb-5" style="color: #454545">
              <strong>
                AFFORDABLE PRICES,
                <hr class="m-0" style="border: 0" />
                GREAT RESULTS
              </strong>
            </h2>
            <p class="h6-responsive grey-text mb-auto" style="font-weight: lighter">
              Я приглашаю познакомиться с моими работами и, конечно же,
              связаться со мной, когда вы захотите реализовать самые безумные и
              нестандартные идеи в любых уголках Израиля. Я не привязываются к
              съёмках в студиях, я умею работать с естественным светом в любых
              условиях.
            </p>
          </div>
        </div>
      </div>
      <div class="jarallax" style="height: 80vh">
        <div class="clippy-bg rgba-stylish-light"></div>
        <img
          class="jarallax-img"
          src="~/assets/img/camera.jpg"
        />
      </div>
      <div
        class="section-cards position-relative h-100"
        style="background-color: #212121"
      >
        <span
          class="active_line_1"
          data-aos="goLine_xsmall"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
        <div class="py-5 container d-flex flex-center flex-column">
          <h2
            class="h1 mt-5 text-white text-center text-uppercase animated pulse infinite"
          >
            Book a service
          </h2>
        </div>
          <serviceCards :orders="orders" class="mb-auto" />
      </div>
    </main>
    <div class="bg-white w-100" style="position: relative; height: 20vh"></div>
    <div class="position-relative">
      <span
        class="active_line_1"
        data-aos="goLine_xsmall"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
    </div>
    </div>
  </div>
</template>

<script>
import ordersQuery from "~/apollo/queries/order/orders.gql";
import serviceCards from "./services_cards";
export default {
  data() {
    return {
      orders: [],
      error: null
    };
  },
  components: {
    serviceCards,
  },
  apollo: {
    orders: {
      prefetch: true,
      query: ordersQuery,
    }
  },
};
</script>

<style lang="scss" scoped>
.jarallax > .clippy-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
}

h2,
.display-1,
.display-3 {
  font-family: "Oswald", sans-serif;
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
    height: 45px;
    opacity: 1;
  }
}

.display-3 {
  font-size: 3.5rem;
}

.second {
  height: 70vh;
}

@media (max-width: 575px) {
  .display-1 {
    font-size: 3rem;
  }
  .display-3 {
    font-size: 2rem;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2.5rem;
  }
  .display-1 {
    font-size: 3rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .display-1 {
    font-size: 4rem;
  }
  .display-3 {
    font-size: 3.5rem;
  }
}
</style>
