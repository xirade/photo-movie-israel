<template>
  <div>
    <Loading v-if="showLoad" />
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
            <h2 class="display-3 text-uppercase pl-2 font-weight-bold">
              {{ $i18n.locale == "en" ? "Services" : "Сервисы" }}
            </h2>
          </div>
        </div>
      </header>

      <main>
        <div class="container bg-light text-black" style="max-width: 100%;">
          <div class="d-flex py-5 align-items-center flex-center flex-column">
            <div class="container my-5 py-5 text-center mx-auto">
              <h2
                class="display-1 text-uppercase mt-auto mb-5"
                style="color: #454545"
              >
                <strong v-html="servicePage.title"></strong>
              </h2>
              <p
                class="w-responsive mx-auto px-5  grey-text mb-auto"
                style="font-weight: lighter"
                v-html="servicePage.description"
              ></p>
            </div>
          </div>
        </div>
        <div class="jarallax overflow-hidden" style="height: 60vh;">
          <div class="clippy-bg rgba-stylish-light"></div>
          <img
            class="img-fluid"
            v-parallax="0.2"
            src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596364484/hunter-moranville-CMEpx6q7xrs-unsplash_xzzly5.jpg"
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
              {{ $i18n.locale == "en" ? "Book a service" : "Закажи сейчас" }}
            </h2>
          </div>
          <services-cards :orders="servicePage.orders" class="mb-auto" />
        </div>
      </main>
      <div
        class="bg-white w-100"
        style="position: relative; height: 20vh"
      ></div>
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
import servicePageQuery from "~/apollo/queries/order/orders.gql";
export default {
  beforeCreate() {
    this.showLoad = this.$apolloProvider.watchLoading;
  },
  mounted() {
    this.showLoad = false;
  },
  data() {
    return {
      servicePage: {},
      error: null,
      showLoad: true
    };
  },
  apollo: {
    servicePage: {
      prefetch: true,
      query: servicePageQuery,
      variables() {
        return { locale: this.$i18n.locale };
      }
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.servicePage.metatitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.servicePage.metades
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595950779/1_guaw1o.jpg"
        },
        ...i18nHead.meta
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.jarallax > .clippy-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  z-index: 1;
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
