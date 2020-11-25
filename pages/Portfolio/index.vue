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
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-card>
                <mdb-view
                  class="overlay round z-depth-1"
                >
                  <router-link :to="'/portfolio/aerophotos'">
                    <img
                      :src="getImage(1)"
                      alt="sample photo"
                      class="img-fluid"
                    />
                    <mdb-mask waves overlay="black-light">
                    </mdb-mask>
                  </router-link>
                </mdb-view>
                <mdb-card-body>
                  <mdb-card-title>{{getTitle(1)}}</mdb-card-title>
                  <mdb-card-text>
                    {{getDescription(1)}}
                  </mdb-card-text>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-card>
              <mdb-view
                class="overlay round z-depth-1"
              >
                <router-link :to="'/portfolio/street'">
                  <img
                    :src="getImage(2)"
                    alt="sample photo"
                    class="img-fluid"
                  />
                    <mdb-mask waves overlay="black-light">
                    </mdb-mask>
                </router-link>
              </mdb-view>
               <mdb-card-body>
                  <mdb-card-title>{{getTitle(2)}}</mdb-card-title>
                  <mdb-card-text>
                    {{getDescription(2)}}
                  </mdb-card-text>
                </mdb-card-body>
                </mdb-card>
            </mdb-col>
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-card>
              <mdb-view
                class="overlay round z-depth-1"
              >
                <a :href="'/portfolio/family'">
                  <img
                    :src="getImage(3)"
                    alt="sample photo"
                    class="img-fluid"
                  />
                    <mdb-mask waves overlay="black-light">
                    </mdb-mask>
                </a>
              </mdb-view>
              <mdb-card-body>
                  <mdb-card-title>{{getTitle(3)}}</mdb-card-title>
                  <mdb-card-text>
                    {{getDescription(3)}}
                  </mdb-card-text>
                </mdb-card-body>
                </mdb-card>
            </mdb-col>
            <mdb-col md="6" xl="5" class="mb-4">
              <mdb-card>
              <mdb-view
                class="overlay round z-depth-1"
              >
                <router-link :to="'/portfolio/wedding'">
                  <img
                    :src="getImage(4)"
                    alt="sample photo"
                    class="img-fluid"
                  />
                    <mdb-mask waves overlay="black-light">
                    </mdb-mask>
                </router-link>
              </mdb-view>
               <mdb-card-body>
                  <mdb-card-title>{{getTitle(4)}}</mdb-card-title>
                  <mdb-card-text>
                    {{getDescription(4)}}
                  </mdb-card-text>
                </mdb-card-body>
                </mdb-card>
            </mdb-col>
          </mdb-row>
          <h2 class="h1-responsive font-weight-bold my-5">OUR BEST PROJECTS</h2>
          <p class="grey-text w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
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
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      portfolios: [
      {
        "id": "1",
        "title": "Aerophotos",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599578471/241074099_dqe7q4_ac84205857.jpg"
        },
        "date": "2020-09-08T15:30:00.000Z"
      },
      {
        "id": "2",
        "title": "Street",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599578589/camera_naxnah_f389a1759e.jpg"
        },
        "date": "2020-09-08T15:00:00.000Z"
      },
      {
        "id": "3",
        "title": "Family",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599578648/0017_mtb2mn_6fe43e42f5.jpg"
        },
        "date": "2020-09-08T15:30:00.000Z"
      },
      {
        "id": "4",
        "title": "Wedding",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599578716/0012_cdvwcm_d8193abf91.jpg"
        },
        "date": "2020-09-08T15:30:00.000Z"
      }
    ]
    }
  },
  // apollo: {
  //   portfolios: {
  //     prefetch: true,
  //     query: portfoliosQuery,
  //   },
  // },
  methods: {
    getImage(id) {
      let img = this.portfolios;
      for (const portfolio in img) {
        let item = img.find( (item) => item.id == id);
        return item.image.url
      }
    },
      getTitle(id) {
      let title = '';
       for (const portfolio in this.portfolios) {
        title = this.portfolios.find((title) => title.id == id);
      }
        return title.title;
    },
      getDescription(id) {
      let description = '';
       for (const portfolio in this.portfolios) {
        description = this.portfolios.find((description) => description.id == id);
      }
        return description.description;
    },
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
    mdbIcon
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff !important;
}

.round {
  border-top-left-radius: 0.25rem ;
  border-top-right-radius: 0.25rem ;
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
h4 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.display-3 {
  font-size: 3.5rem;
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
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
