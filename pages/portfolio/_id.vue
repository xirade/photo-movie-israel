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
            <h2 class="display-3 text-uppercase pl-2 font-weight-bold">
              {{ $i18n.locale == "en" ? "Portfolio" : "Портфолио" }}
            </h2>
          </div>
        </div>
        <div class="py-5 bg-dark position-relative">
          <category :items="category" />
        </div>
      </header>
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
import portfolioQuery from "~/apollo/queries/portfolio/portfolio.gql";
export default {
  apollo: {
    category: {
      prefetch: true,
      query: portfolioQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  },
  beforeCreate() {
    this.showLoad = this.$apolloProvider.watchLoading;
  },
  mounted() {
    this.showLoad = false;
  },
  data() {
    return {
      category: {},
      showLoad: true
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.category.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category.metades
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
