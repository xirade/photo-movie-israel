<template>
  <div>
    <Loading v-if="showLoad" />
    <div v-else>
      <div class="jarallax overflow-hidden">
        <div class="clippy-bg rgba-stylish-slight"></div>
        <img
          class="jarallax-img"
          src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596198873/background_n0nne4.jpg"
          alt="background"
          v-parallax.absY="0.2"
        />
        <div class="py-5">
          <div class="header-main pb-5 d-flex flex-column mb-auto">
            <img
              src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596646320/000_apiqou_bznbq5.png"
              height="120px"
              width="250px"
              class="mx-auto"
              alt="Logo"
            />
            <div>
              <transition appear appear-active-class="fade-enter-active-line-1">
                <span class="active_line_1"></span>
              </transition>
            </div>
            <h1
              class="display-4 title-header text-uppercase text-center white-text animated fadeInDown slower"
              v-html="homePage.titletop"
            ></h1>
          </div>
        </div>
      </div>
      <div
        class="service container bg-dark p-0"
        style="max-width: 100%; z-index: 0"
      >
        <div
          class="bg-white position-relative text-black d-flex justify-content-end"
          style="z-index: 0"
        >
          <span
            class="active_line_1 line-bg"
            data-aos="goLine_service"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          ></span>
          <div class="service_title">
            <p class="display-5 pl-2 font-weight-bolder yellow-text">01</p>
            <h2 class="display-3 text-uppercase pl-2 font-weight-bold">
              {{ $i18n.locale == "en" ? "Services" : "Сервисы" }}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div
          class="w-100 position-relative"
          style="background-color: #212121; z-index: 2"
        >
          <mdb-row class="py-2 justify-content-center mx-auto">
            <mdb-col
              class="p-2"
              xl="6"
              v-for="(item, index) in homePage.homes"
              :key="item.id"
            >
              <mdb-card
                class="card-image h-100 border border-dark"
                :style="{
                  backgroundImage: 'url(' + item.image.url + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }"
              >
                <div class="text-white text-center rgba-brown-light p-1 h-100">
                  <div
                    class="z-depth-1 mx-auto py-5 h-100 d-flex flex-column align-items-center"
                    style="background-color: #2e2e2e99"
                  >
                    <h5
                      :class="[
                        'text-' + item.color,
                        'font-weight-bold',
                        'text-uppercase'
                      ]"
                    >
                      <mdb-icon :icon="item.icon" />{{ item.name }}
                    </h5>
                    <mdb-card-title tag="h4" class="pt-2 h3-responsive">
                      <strong>{{ item.title }}</strong>
                    </mdb-card-title>
                    <mdb-container class="my-2">
                      <div
                        v-show="item.description"
                        class="h6-responsive text-white"
                        v-html="$md.render(item.description)"
                      ></div>
                    </mdb-container>
                    <mdb-btn :outline="item.color" @click="showModal(index)">
                      <mdb-icon
                        class="text-light"
                        icon="shopping-bag left"
                      /><span class="h6-responsive text-light">{{
                        $i18n.locale == "en" ? "Learn more" : "Узнать больше"
                      }}</span>
                    </mdb-btn>
                  </div>
                </div>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </div>
      </div>
      <div
        class="container bg-white text-black d-flex justify-content-start"
        style="max-width: 100%; position: relative"
      >
        <span
          class="active_line_3"
          data-aos="goLine_1"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
        <div class="service_title">
          <p class="display-5 pr-2 text-right font-weight-bolder yellow-text">
            02
          </p>
          <h2 class="display-3 text-uppercase pr-2 text-right font-weight-bold">
            {{ $i18n.locale == "en" ? "About" : "О нас" }}
          </h2>
        </div>
      </div>
      <div class="container bg-light text-black" style="max-width: 100%">
        <div
          class="d-flex py-5 align-items-center flex-center flex-column"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          <div class="container text-center my-5 py-5 mx-auto">
            <h2
              class="display-1 text-uppercase
             mt-auto mb-3"
              style="color: #454545"
            >
              <strong v-html="homePage.titlemiddle"> </strong>
            </h2>
            <p class="h5 text-black-50 text-uppercase mb-5">
              {{ homePage.subtitlemiddle }}
            </p>
            <p
              class="w-responsive mx-auto text-center grey-text mb-4"
              style="font-weight: lighter"
              v-html="homePage.description"
            ></p>
            <mdb-btn
              color="yellow darken-3"
              @click="$router.push({ name: `about___${$i18n.locale}` })"
              class="px-5"
            >
              <mdb-icon icon="clone left" />{{
                $i18n.locale == "en" ? "Read more" : "Узнать больше"
              }}
            </mdb-btn>
          </div>
        </div>
      </div>
      <div
        class="bg-white text-black d-flex justify-content-end"
        style="position: relative"
      >
        <div class="service_title">
          <p class="display-5 pl-2 font-weight-bolder yellow-text">03</p>
          <h2 class="display-3 text-uppercase pl-2 font-weight-bold">
            {{ $i18n.locale == "en" ? "Media" : "Медиа" }}
          </h2>
        </div>
        <span
          class="active_line_4"
          data-aos="goLine_smaller"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </div>
      <div>
        <CoolLight />
      </div>

      <div class="bg-white w-100" style="position: relative; height: 40vh">
        <span
          class="active_line_1"
          data-aos="goLine_small"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </div>
      <span
        class="active_line_1"
        data-aos="goLine_xsmall"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
      <modal
        v-if="getWedding"
        :index="selectedIndex"
        :items="getWedding"
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import homePageQuery from "@/apollo/queries/home/homes.gql";
import VLazyImage from "v-lazy-image";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbTextarea,
  mdbInput,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon
} from "mdbvue";
export default {
  apollo: {
    homePage: {
      prefetch: true,
      query: homePageQuery,
      variables() {
        return { locale: this.$i18n.locale };
      },
      update(data) {
        return data.homePage;
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
      selectedIndex: 0,
      isModalVisible: false,
      error: null,
      homePage: {},
      showLoad: true,
      image: "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595950779/1_guaw1o.jpg"
    };
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.homePage.metatitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.homePage.metades
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.homePage.metatitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.homePage.metades
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.homePage.metatitle
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.homePage.metatitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.homePage.metades
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.homePage.metatitle
        },
        ...i18nHead.meta
      ]
    };
  },
  em: "#animateFadeIn_1",
  components: {
    VLazyImage,
    mdbContainer,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbTextarea,
    mdbInput,
    mdbView,
    mdbMask,
    mdbIcon
  },
  transition: "fade",
  methods: {
    showModal(index) {
      if (this.homePage.homes[index].disabled == true) {
        this.isModalVisible = true;
      } else {
        this.$router.push({ name: `services___${this.$i18n.locale}` });
      }
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    getWedding() {
      if (this.homePage.homes) {
        const filtered = this.homePage.homes.filter(i => i.disabled == true);

        return filtered;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  color: #e3deca;
}

.jarallax > .clippy-bg {
  height: 100%;
  width: 100%;
  position: absolute;
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}

.Masthead {
  height: 0 !important;
  min-height: 0 !important;
}

hr {
  border: 0;
}
.title-header {
  margin-top: 150px;
}

.header-main {
  position: relative;
}
.card {
  background-color: #212121;
}
.active_line_1 {
  width: 4px;
  position: absolute;
  left: 50%;
  height: 134px;
  overflow: hidden;
  background-color: rgba(255, 196, 46, 0.8);
}

.active_line_2,
.active_line_3,
.active_line_4 {
  width: 4px;
  position: absolute;
  left: 50%;
  overflow: hidden;
  top: 93vh;
  background-color: rgba(255, 196, 46, 0.8);
}
.active_line_2 {
  top: 110vh;
}

.active_line_3 {
  top: 0;
}
.active_line_4 {
  top: 0;
}
.active_line_small {
  width: 4px;
  position: absolute;
  left: 50%;
  overflow: hidden;
  background-color: rgba(247, 229, 184, 0.8);
  top: 75vh;
}

[data-aos="goLine"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 70vh;
    opacity: 1;
  }
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

[data-aos="goLine_1"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 280px;
    opacity: 1;
  }
}
[data-aos="goLine_small"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 170px;
    opacity: 1;
  }
}
[data-aos="goLine_smaller"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 205px;
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

[data-aos="goLine_big"] {
  height: 0;
  opacity: 0;
  transition-property: height, opacity;

  &.aos-animate {
    height: 200vh;
    opacity: 1;
  }
  @media (max-width: 575px) {
    &.aos-animate {
      height: 290vh;
    }
  }
  @media (min-width: 576px) and (max-width: 767px) {
    &.aos-animate {
      height: 290vh;
    }
  }
}

.fade-enter-active-line-1 {
  animation: goLine_1 1.5s linear;
}

@keyframes goLine_1 {
  from {
    height: 0;
  }
  to {
    height: 134px;
    opacity: 1;
  }
}

.service_title {
  width: 50%;
}

.display-4 {
  font-size: 5.5rem;
}

.display-3 {
  font-size: 3.5rem;
}

.icon-feedback {
  color: white;
  text-decoration: none !important;
}
.icon-feedback:hover {
  color: #cfcfcf;
}
@media (max-width: 575px) {
  .service_title {
    margin-top: 7.5rem;
  }
  .display-4 {
    font-size: 2.8rem;
  }
  .display-3 {
    font-size: 2rem;
  }
  .block_2 {
    top: 58.4vh;
  }
  .display-1 {
    font-size: 2.7rem;
  }
  .contact-form {
    height: 160vh;
  }
  .active_line_small {
    top: 155vh;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
  .service_title {
    margin-top: 7.5rem;
  }

  .display-4 {
    font-size: 3.5rem;
  }
  .display-3 {
    font-size: 2.5rem;
  }
  .block_2 {
    top: 58.4vh;
  }
  .display-1 {
    font-size: 3rem;
  }
  .contact-form {
    height: 160vh;
  }
  .active_line_small {
    top: 155vh;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
  .service_title {
    margin-top: 5.5rem;
  }
  .display-4 {
    font-size: 4.5rem;
  }
  .display-3 {
    font-size: 2.5rem;
  }
  .block_2 {
    top: 56.4vh;
  }
  .display-1 {
    font-size: 3.5rem;
  }
  .contact-form {
    height: 160vh;
  }
  .active_line_small {
    top: 155vh;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
  .service_title {
    margin-top: 5.5rem;
  }
  .block_2 {
    top: 56.4vh;
  }
  .display-1 {
    font-size: 4rem;
  }
  .active_line_small {
    top: 85vh;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .service_title {
    margin-top: 5.5rem;
  }
  .active_line_small {
    top: 75vh;
  }
}
</style>
