<template>
  <div>
    <div>
      <div class="jarallax">
        <div class="clippy-bg pb-5 rgba-stylish-slight"></div>
        <img
          class="jarallax-img"
          src="~/assets/img/background.jpg"
          alt="background"
        />
        <div class="py-5">
          <div
            class="header-main pb-5 d-flex flex-column mb-auto"
            style="height: 80vh;"
          >
            <img
              src="~/assets/img/4log.png"
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
              class="display-4 title-header text-center white-text animated fadeInDown slower"
            >
              FROM A DIFFERENT
              <hr class="m-0" />
              POINT OF VIEW
            </h1>
          </div>
        </div>
        <span
          class="active_line_1 line-bg"
          data-aos="goLine_service"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </div>
      <div
        class="service container bg-dark p-0"
        style="max-width: 100%; z-index: 0"
      >
        <div
          class="bg-white text-black d-flex justify-content-end"
          style="z-index: 0"
        >
          <div class="service_title">
            <p class="display-5 pl-2 font-weight-bolder yellow-text">01</p>
            <h2 class="display-3 pl-2 font-weight-bold">SERVICE</h2>
          </div>
        </div>
      </div>
      <div>
        <div
          class="w-100 position-relative"
          style="background-color: #212121; z-index: 2"
        >
          <mdb-row class="justify-content-center py-3 px-2 mx-auto">
            <mdb-col
              class="p-3"
              xl="6"
              v-for="(item, index) in homes"
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
                        v-if="item.description"
                        class="h6-responsive text-white"
                        v-html="$md.render(item.description)"
                      ></div>
                    </mdb-container>
                    <nuxt-link
                      :event="item.disabled ? '' : 'click'"
                      class="mt-auto"
                      to="/services"
                    >
                      <mdb-btn :outline="item.color" @click="showModal(index)">
                        <mdb-icon
                          class="text-light"
                          icon="shopping-bag left"
                        /><span class="h6-responsive text-light"
                          >Узнать больше</span
                        >
                      </mdb-btn>
                    </nuxt-link>
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
          <h2 class="display-3 pr-2 text-right font-weight-bold">ABOUT</h2>
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
            <h2 class="display-1 mt-auto mb-3" style="color: #454545">
              <strong>
                WE TAKE PICTURES
                <hr class="m-0" />
                FROM ABOVE
              </strong>
            </h2>
            <p class="h5 text-black-50 text-uppercase mb-5">
              Добро пожаловать на мой сайт!
            </p>
            <p
              class="h6-responsive text-center grey-text mb-4"
              style="font-weight: lighter"
            >
              Я Павел, режисер видео-монтажа, видеограф и фотограф. Опыт работы
              более 12 лет. Работаю по всему Израилю. Помогаю предпринимателям и
              их семьям создать брендированный фото-видео контент об их
              профессиональной и личной жизни. Преимущество работы со мной:
              работаю в программах Photoshop, Adobe Premier, Adobe After Effect,
              Davinci, Lightroom.Что это значит для вас? Фантазиям и
              креативности вашей съемки почти нет границ.Увлекаюсь
              высокотехнологичной съёмкой, постоянно обучаясь новым техникам
              видеосъемки и монтажа.
            </p>
            <mdb-btn
              color="yellow darken-3"
              @click="$router.push('/about')"
              class="px-5"
            >
              <mdb-icon icon="clone left" />Read more
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
          <h2 class="display-3 pl-2 font-weight-bold">MEDIA</h2>
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
      <Modal
        :index="selectedIndex"
        :items="myWedding"
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import homesQuery from "~/apollo/queries/home/homes.gql";
import VLazyImage from "v-lazy-image";
import Modal from "~/components/modal.vue";
import CoolLight from "~/pages/CoolLight.vue";
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
  data() {
    return {
      selectedIndex: 0,
      isModalVisible: false,
      error: null,
      homes: []
    };
  },
  apollo: {
    homes: {
      prefetch: true,
      query: homesQuery
    }
  },
  em: "#animateFadeIn_1",
  components: {
    VLazyImage,
    CoolLight,
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
    mdbIcon,
    Modal
  },
  transition: "fade",
  methods: {
    showModal(index) {
      this.isModalVisible = this.homes[index].disabled;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {
    myWedding() {
      return this.homes.filter(item => {
        return item.disabled != false;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.first {
  height: 110vh;
}

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

.display-4,
.display-1,
.display-3,
.h3 {
  font-family: "Oswald", sans-serif;
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
