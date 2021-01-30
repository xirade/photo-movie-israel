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
        <section class="text-center my-5">
          <mdb-row class="d-flex justify-content-center">
            <mdb-col
              v-for="portfolio in portfolios"
              :key="portfolio.id"
              md="6"
              xl="5"
              class="mb-4"
            >
              <mdb-card>
                <mdb-view class="overlay round z-depth-1 bg-light">
                  <router-link :to="portfolio.url">
                    <v-lazy-image
                      :srcset="portfolio.image.url + '?webp'"
                      :src-placeholder="require('~/assets/img/loading.svg')"
                      :src="portfolio.image.url"
                      :alt="portfolio.title"
                    />
                    <mdb-mask waves overlay="black-light"> </mdb-mask>
                  </router-link>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>{{ portfolio.title }}</mdb-card-title>
                  <mdb-card-text>
                    {{ portfolio.description }}
                  </mdb-card-text>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <h2 class="h1-responsive font-weight-bold my-5">OUR BEST PROJECTS</h2>
          <p class="grey-text w-responsive mx-auto mb-5">
            Я приглашаю познакомиться с моими работами и, конечно же, связаться
            со мной, когда вы захотите реализовать самые безумные и
            нестандартные идеи в любых уголках Израиля.
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
// import portfoliosQuery from '~/apollo/queries/portfolio/portfolios.gql';
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
      api_url: process.env.strapiBaseUri,
      portfolios: [
        {
          id: "1",
          title: "Видео-визитка",
          description: "Для презентации бизнеса.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610474522/ashkan_forouzani_Kyzup46aa7o_unsplash_fccf0abd4c.jpg"
          },
          date: "2020-09-08T15:30:00.000Z",
          url: "/portfolio/aerophotos"
        },
        {
          id: "2",
          title: "Предметная",
          description: "Для рекламы бизнеса.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610474355/ezequiel_garrido_ije_JJ_8xe_ME_4_unsplash_rfjp7o_02ec490a2d.jpg"
          },
          date: "2020-09-08T15:00:00.000Z",
          url: "/portfolio/street"
        },
        {
          id: "3",
          title: "Имиджевая",
          description: "Для блога, статей и социальных сетей.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610472644/78a1c6e2a5049b4cb0816efdf3f75f88_ufhzuv_b344858731.jpg"
          },
          date: "2020-09-08T15:30:00.000Z",
          url: "/portfolio/family"
        },
        {
          id: "4",
          title: "Семейная",
          description: "Для семейных историй и торжеств.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610474665/jonathan_borba_z_W4i9_Q6_Cd_Y0_unsplash_83be7c912c.jpg"
          },
          date: "2020-09-08T15:30:00.000Z",
          url: "/portfolio/wedding"
        }
      ],
      error: null
    };
  },
  // apollo: {
  //   portfolios: {
  //     prefetch: true,
  //     query: portfoliosQuery,
  //   },
  // },
  async mounted() {
    try {
      this.portfolios = await this.portfolios.find();
    } catch (error) {
      this.error = error;
    }
  },
  name: "ProjectsPage",
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
.v-lazy-image {
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

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
