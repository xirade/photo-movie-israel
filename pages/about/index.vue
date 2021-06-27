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
          <h2 class="display-3 pl-2 font-weight-bold text-uppercase">
            {{ $i18n.locale == "en" ? "About" : "О нас" }}
          </h2>
        </div>
      </div>
    </header>

    <main class="w-100" style="background-color: #212121;">
      <div class="w-100 py-5 h-100">
        <mdb-container class="mx-auto">
          <section>
            <mdb-row class="mx-auto">
              <mdb-col class="mt-5 mx-auto" md="6">
                <h2
                  class="display-2 mb-3 white-text mt-5 text-uppercase"
                  v-html="aboutPage.title"
                ></h2>
                <p
                  class="h6-responsive font-weight-light grey-text mt-5"
                  v-html="aboutPage.description"
                ></p>
              </mdb-col>
              <mdb-col md="6" class="pl-auto mt-5">
                <v-lazy-image
                  v-if="aboutPage.image != undefined"
                  :srcset="aboutPage.image.url + '?webp'"
                  :src="aboutPage.image.url"
                  :alt="aboutPage.title"
                  class="section-img img-fluid rounded z-depth-1"
                />
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
            {{
              $i18n.locale == "en"
                ? "Our amazing team"
                : "Наша удивительная команда"
            }}
          </h2>
          <p class="grey-text h6-responsive mb-5 mx-auto">
            {{
              $i18n.locale == "en"
                ? "My team will always be glad to cooperate! If you have ideas, thoughts or suggestions on how we can be useful to you, please contact us!"
                : "Моя команда всегда будет рада сотрудничеству! Если у вас есть идеи, мысли или предложения как мы можем быть вам полезными, обращайтесь!"
            }}
          </p>
          <mdb-row>
            <mdb-col
              md="4"
              class="mb-md-0 mb-5"
              v-for="item in aboutPage.avatar"
              :key="item.id"
            >
              <picture>
                <source :srcSet="item.image.url + '?webp'" type="image/webp" />
                <source :srcSet="item.image.url" type="image/jpeg" />
                <b-avatar :src="item.image.url" size="10rem"></b-avatar>
              </picture>
              <h4 class="font-weight-bold dark-grey-text my-4">
                {{ item.name }}
              </h4>
              <h6 class="text-uppercase grey-text mb-3">{{ item.category }}</h6>
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
import aboutPageQuery from "~/apollo/queries/about/abouts.gql";
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import { BAvatar } from "bootstrap-vue";
export default {
  data() {
    return {
      aboutPage: [],
      error: null
    };
  },
  apollo: {
    aboutPage: {
      prefetch: true,
      query: aboutPageQuery,
      variables() {
        return {
          locale: this.$i18n.locale
        };
      }
    }
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.aboutPage.metatitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.aboutPage.metades
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
    font-size: 3.5rem;
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
