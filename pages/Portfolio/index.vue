<template>
  <div>
    <header class="d-flex flex-column">
      <img
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596646320/000_apiqou_bznbq5.png"
        height="120px"
        width="250px"
        class="mx-auto mt-5"
        alt="Logo"
      />

      <div class="service mt-4 position-relative">
        <span
          class="active_line_1"
          data-aos="goLine_media"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </div>
      <div class="bg-white container text-black d-flex justify-content-end">
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 text-left font-weight-bolder yellow-text">
            03
          </p>
          <h2 class="display-3 pl-2 font-weight-bold">PORTFOLIO</h2>
        </div>
      </div>
    </header>
    <div class="py-5 bg-light">
      <mdb-container>
        <section
          class="text-center my-5"
          v-for="portfolio in portfolios"
          :key="portfolio.id"
        >
          <mdb-row class="d-flex justify-content-center">
            <mdb-col md="6" xl="5" class="mb-4" v-for="(card,index) in portfolio.cards" :key="index">
              <mdb-card>
                <mdb-view class="overlay round z-depth-1 bg-light">
                  <router-link :to="card.link">
                    <v-lazy-image
                      class="w-100"
                      :srcset="card.image.url + '?webp'"
                      :src="card.image.url"
                      :alt="card.title"
                    />
                    <mdb-mask waves overlay="black-light"> </mdb-mask>
                  </router-link>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>{{
                    card.title
                  }}</mdb-card-title>
                  <mdb-card-text>
                    {{ card.description }}
                  </mdb-card-text>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <h2 class="h1-responsive font-weight-bold my-5">OUR BEST PROJECTS</h2>
          <p class="grey-text w-responsive mx-auto mb-5">
            {{ portfolio.description }}
          </p>
        </section>
      </mdb-container>
    </div>
    <div class="position-relative">
      <span
        class="active_line_1"
        data-aos="goLine_xsmall"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
    </div>
  </div>
</template>

<script>
import portfoliosQuery from "~/apollo/queries/portfolio/portfolios.gql";
import VLazyImage from "v-lazy-image";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbView,
  mdbMask,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbIcon
} from "mdbvue";
export default {
  data() {
    return {
      portfolios: [],
      error: null
    };
  },
  apollo: {
    portfolios: {
      prefetch: true,
      query: portfoliosQuery
    }
  },
  name: "Portfolio",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbIcon,
    VLazyImage
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff !important;
}

img {
  max-width: 100%;
  height: auto;
}

.round {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
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
[data-aos="goLine_media"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 230px;
    opacity: 1;
  }
}

h2,
h4,
.display-3 {
  font-family: "Oswald", sans-serif;
}

.display-3 {
  font-size: 3.5rem;
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

@media (min-width: 320px) and (max-width: 574px) {
  .display-3 {
    font-size: 2rem;
  }
}

@media (max-width: 575px) {
  .display-3 {
    font-size: 2rem;
  }
  .newsCaption {
    height: 20%;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2rem;
  }
  .newsCaption {
    height: 15%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .newsCaption {
    height: 25%;
  }
}
</style>
