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
        <div id="animateFadeIn_3">
          <span
            class="active_line_1"
            data-aos="goLine_about"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
        </div>
      </div>
      <div class="bg-white container text-black d-flex justify-content-end">
        <div class="service_title mt-5 w-50">
          <p class="display-5 pl-2 text-left font-weight-bolder yellow-text">
            02
          </p>
          <h2 class="display-3 pl-2 font-weight-bold text-uppercase">About</h2>
        </div>
      </div>
    </header>

    <main class="w-100" style="background-color: #212121;">
      <div class="w-100 py-5 h-100">
        <mdb-container class="mx-auto">
          <section>
            <mdb-row class="mx-auto">
              <mdb-col class="mt-5 mx-auto" md="6">
                <h2 class="display-2 mb-3 white-text mt-5 text-uppercase">
                  We take pictures
                  <hr class="m-0" style="border: 0;" />
                  from above
                </h2>
                <p class="font-weight-light grey-text mt-5">
                  {{ abouts[0].description }}
                </p>
              </mdb-col>
              <mdb-col md="6" class="pl-auto mt-5">
                <picture>
                  <source
                    :srcSet="abouts[0].image.url + '?webp'"
                    type="image/webp"
                  />
                  <source :srcSet="abouts[0].image.url" type="image/jpeg" />
                  <v-lazy-image
                    :src="abouts[0].image.url"
                    :alt="abouts[0].title"
                    class="section-img img-fluid rounded z-depth-1"
                  />
                </picture>
              </mdb-col>
            </mdb-row>
          </section>
        </mdb-container>
      </div>
    </main>

    <footer class="position-relative">
      <span
        class="active_line_1"
        data-aos="goLine_xsmall"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
      <mdb-container class="py-5">
        <section id="team-section" class="text-center">
          <h2 class="h1-responsive font-weight-bold my-5 text-uppercase">
            Our amazing team
          </h2>
          <p class="grey-text w-responsive mb-5 mx-auto">
            Моя команда всегда будет рада сотрудничеству! Если у вас есть идеи,
            мысли или предложения как мы можем быть вам полезными, обращайтесь!
          </p>
          <mdb-row>
            <mdb-col md="4" class="mb-md-0 mb-5">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg?webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg"
                  type="image/jpeg"
                />
                <b-avatar
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg"
                  size="10rem"
                ></b-avatar>
              </picture>
              <h4 class="font-weight-bold dark-grey-text my-4">Pawel Milov</h4>
              <h6 class="text-uppercase grey-text mb-3">Photographer</h6>
            </mdb-col>
            <mdb-col md="4" class="mb-md-0 mb-5">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg?webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg"
                  type="image/jpeg"
                />
                <b-avatar
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596310515/cat_1200getty_pxmgj9.jpg"
                  size="10rem"
                ></b-avatar>
              </picture>
              <h4 class="font-weight-bold dark-grey-text my-4">Yulia Milova</h4>
              <h6 class="text-uppercase grey-text mb-3">Manager</h6>
            </mdb-col>
            <mdb-col md="4" class="mb-md-0 mb-5">
              <picture>
                <source
                  srcSet="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg?webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596213657/photo-1537815749002-de6a533c64db_k5i0jp.jpg"
                  type="image/jpeg"
                />
                <b-avatar
                  src="https://res.cloudinary.com/dxeebmzdv/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1596310336/mountain_beaver-a_rufa_qwz4mt.jpg"
                  size="10rem"
                ></b-avatar>
              </picture>
              <h4 class="font-weight-bold dark-grey-text my-4">
                Daniel Bar Shay
              </h4>
              <h6 class="text-uppercase grey-text mb-3">Web Developer</h6>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>
      <span
        class="active_line_1"
        data-aos="goLine_xsmall"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
    </footer>
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
import VLazyImage from "v-lazy-image";
// import aboutsQuery from '~/apollo/queries/about/abouts.gql';
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import { BAvatar, AvatarPlugin } from "bootstrap-vue";
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      abouts: [
        {
          id: "1",
          title: "About me",
          description:
            "Буду рад подарить позитивные эмоции на фотосессии или снять видео о важном событии в вашей личной жизни или в бизнесе.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610479809/david_hurley_hj_St16_J_Gy_EE_unsplash_fb2d85bdf9.jpg"
          }
        }
      ],
      error: null
    };
  },
  //  apollo: {
  //   abouts: {
  //     prefetch: true,
  //     query: aboutsQuery,
  //   },
  // },
  async mounted() {
    try {
      this.abouts = await this.abouts.find();
    } catch (error) {
      this.error = error;
    }
  },
  components: {
    VLazyImage,
    mdbContainer,
    mdbRow,
    mdbCol,
    BAvatar
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

.display-2,
h2,
h4,
.display-3 {
  font-family: "Oswald", sans-serif;
}

.display-3 {
  font-size: 3.5rem;
}

[data-aos="goLine_about"] {
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

@media (min-width: 320px) and (max-width: 574px) {
  .display-2 {
    text-align: center;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
    text-align: center;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .section-img {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .display-3 {
    font-size: 2rem;
  }
}

@media (max-width: 575px) {
  .display-3 {
    font-size: 2rem;
  }
  .display-2 {
    font-size: 2.5rem;
    text-align: center;
    margin: 0 auto;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  .display-3 {
    font-size: 2rem;
  }
  .display-2 {
    font-size: 2.5rem;
    text-align: center;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
    text-align: center;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .section-img {
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .display-2 {
    font-size: 2rem;
  }
  p {
    font-size: 0.9rem;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .display-2 {
    font-size: 4rem;
  }
}
</style>
