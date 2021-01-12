<template>
  <div>
    <div class="jarallax">
      <img
        class="jarallax-img"
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596198873/background_n0nne4.jpg"
      />
      <mdb-mask
        class="position-relative"
        overlay="black-slight"
        style="height:95vh;"
        flexCenter
      >
        <div class="header-main d-flex flex-column mb-auto">
          <img
            src="~/assets/img/4log.png"
            height="120px"
            width="250px"
            class="mx-auto mt-5"
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
      </mdb-mask>
    </div>
    <div
      class="position-relative service container bg-dark p-0"
      style="max-width: 100%;"
    >
      <span
        class="active_line_1"
        data-aos="goLine_service"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
      <div class="bg-white text-black d-flex justify-content-end">
        <div class="service_title">
          <p class="display-5 pl-2 font-weight-bolder yellow-text">01</p>
          <h2 class="display-3 pl-2 font-weight-bold">SERVICE</h2>
        </div>
      </div>
    </div>
    <div>
      <div class="w-100" style="background-color:  rgba(28, 35, 49, 0.8);">
        <mdb-row class="mx-auto">
          <mdb-col class="pt-0 px-0" lg="4">
            <mdb-card
              class="card-image h-100"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1596199747/photo-1590944335664-015cc7b65db1_fjdg8n.jpg') no-repeat center;
              background-size: cover;"
            >
              <mdb-view hover></mdb-view>
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="orange-text font-weight-bold">
                  <!-- Изменяемо -->
                  <mdb-icon icon="camera" />ФОТОСЪЕМКА
                </h5>
                <mdb-card-title tag="h4" class="pt-2 text-white">
                  <strong>Для бизнесменов,специалистов, фрилансеров</strong>
                </mdb-card-title>
                <mdb-container>
                  <p class="text-light">
                    Виды съемки:<br />
                    Интеръерная, индустриальная, аэросъемка, панорамная,
                    репортажная, иммиджевая, рекламно- постановочная
                  </p>
                </mdb-container>

                <nuxt-link :to="'/services'">
                  <mdb-btn color="orange" class="white-text">
                    <mdb-icon icon="shopping-bag left" />Узнать больше
                  </mdb-btn>
                </nuxt-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col class="pt-0 px-0" lg="4">
            <mdb-card
              class="card-image h-100"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1596200217/photo-1543235074-4768b5c2233c_enepwc.jpg') no-repeat;
              background-size: cover;"
            >
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="blue-text font-weight-bold">
                  <mdb-icon icon="video" />ВИДЕОСЪЕМКА
                </h5>
                <mdb-card-title tag="h4" class="pt-2 text-white">
                  <strong>Для компаний, предпринимателей, маркетологов</strong>
                </mdb-card-title>
                <mdb-container>
                  <p class="text-white">
                    Виды съемки:<br />
                    Рекламных, промо, информационных и развлекательных роликов,
                    а также корпоративных фильмов.
                  </p>
                </mdb-container>
                <nuxt-link :to="'/services'">
                  <mdb-btn color="blue" class="text-black">
                    <mdb-icon icon="shopping-bag left" />Узнать больше
                  </mdb-btn>
                </nuxt-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col class="pt-0 px-0" lg="4">
            <mdb-card
              class="card-image h-100"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1600277481/96681721-a-movie-production-clapper-board-hands-with-a-movie-clapperboard-on-grey-background-with-copy-space-_afklyl.jpg') no-repeat;
              background-size: cover;"
            >
              <mdb-view hover></mdb-view>
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="green-text font-weight-bold">
                  <mdb-icon icon="film" />СЕМЕЙНАЯ СЪЕМКА
                </h5>
                <mdb-card-title tag="h4" class="pt-2 text-white">
                  <strong
                    >Для торжеств и знаменательных дней</strong
                  >
                </mdb-card-title>
                <mdb-container>
                  <p class="text-white">
                    Виды съемки:<br />
                    Семейная, индивидуальная, беременных, нью-борн, бритмила,
                    бармицва, батмицва, лав-стори, свадебная, детская, дни
                    рождения, торжества.
                  </p>
                </mdb-container>
                <nuxt-link :to="'/services'">
                  <mdb-btn color="green" class="text-black">
                    <mdb-icon icon="shopping-bag left" />Узнать больше
                  </mdb-btn>
                </nuxt-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <div class="w-100"></div>
          <mdb-col class="pt-0 px-0" lg="12">
            <mdb-card
              class="card-image h-100"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1596976468/5e2762f7ab49fd1ed25a9dc4_l7arm8.jpg') no-repeat;
              background-size: cover;"
            >
              <mdb-view hover></mdb-view>
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="pink-text font-weight-bold">
                  <mdb-icon icon="heart" />СВАДЕБНАЯ СЪЕМКА
                </h5>
                <mdb-card-title tag="h4" class="pt-2 text-white">
                  <strong>Для свадеб в Израиле и Европе </strong>
                </mdb-card-title>
                <mdb-container>
                  <p class="text-white">
                    Виды съемки:<br />
                    Фото-видеосьемка свадебной церемонии, фото-видеосьемка
                    сборы, фото-видеосьемка банкетной части, сьемка с дрона,
                    фото-видеосъемка гостей, фото-видеосьемка прогулки.
                  </p>
                </mdb-container>
                <nuxt-link :to="'/services'">
                  <mdb-btn color="pink" class="text-black">
                    <mdb-icon icon="shopping-bag left" />Узнать больше
                  </mdb-btn>
                </nuxt-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </div>
    </div>
    <div
      class="container bg-white text-black d-flex justify-content-start"
      style="max-width: 100%; position:relative;
      "
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
    <div
      class="container bg-light text-black"
      style="max-width: 100%; height: 120vh;"
    >
      <div
        class="d-flex align-items-center flex-center flex-column"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <h2
          class="display-1 text-center mx-auto mt-auto m-0 mb-3"
          style="color: #454545;"
        >
          <strong>
            WE TAKE PICTURES
            <hr class="m-0" />
            FROM ABOVE
          </strong>
        </h2>
        <p
          class="h3 text-black-50 text-uppercase mb-5 w-75 text-center"
          style="font-family: 'DINNeuzeitGroteskLTW01-BdCn';"
        >
          Добро пожаловать на мой сайт!
        </p>
        <p
          class="h5 w-50 text-center grey-text mb-4"
          style="font-weight: lighter;"
        >
          Я Павел, режисер видео-монтажа, видеограф и фотограф. Опыт работы
          более 12 лет. Работаю по всему Израилю. Помогаю предпринимателям и их
          семьям создать брендированный фото-видео контент об их
          профессиональной и личной жизни. Преимущество работы со мной: работаю
          в программах Photoshop, Adobe Premier, Adobe After Effect, Davinci,
          Lightroom.Что это значит для вас? Фантазии и креативность вашей съемки
          почти нет границ.Увлекаюсь высокотехнологичной съёмкой, постоянно
          обучаясь новым техникам видеосъемки и монтажа.
        </p>
        <nuxt-link class="mb-auto" :to="'/about'">
          <mdb-btn color="yellow darken-3" class="px-5">
            <mdb-icon icon="clone left" />Read more
          </mdb-btn>
        </nuxt-link>
      </div>
    </div>
    <div
      class="bg-white text-black d-flex justify-content-end"
      style="position: relative;"
    >
      <div class="service_title">
        <p class="display-5 pl-2 font-weight-bolder yellow-text">03</p>
        <h2 class="display-3 pl-2 font-weight-bold">MEDIA</h2>
        <span
          class="active_line_4"
          data-aos="goLine_smaller"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </div>
    </div>
    <div>
      <CoolLight />
    </div>

    <div class="bg-white w-100" style="position: relative; height: 40vh;">
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
  </div>
</template>

<script>
import AOS from "aos";
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
    return {};
  },
  em: "#animateFadeIn_1",
  components: {
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
    mdbIcon
  },
  transition: "fade",
  //reload page
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "0");
      location.reload();
    }
  }
};
</script>

<style lang="scss">
@import "node_modules/aos/src/sass/aos.scss";
@import "~/assets/css/main.css";

.first {
  height: 110vh;
}

p {
  font-size: 18px;
}

.Masthead {
  height: 0 !important;
  min-height: 0 !important;
}

hr {
  border: 0;
}
.title-header {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
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
.display-1 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}
.display-3 {
  font-size: 3.5rem;
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
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
  .h3 {
    font-size: 1rem;
  }
  .h5 {
    font-size: 0.8rem;
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
  .h3 {
    font-size: 1.5rem;
  }
  .h5 {
    font-size: 1rem;
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
  .h3 {
    font-size: 1.5rem;
  }
  .h5 {
    font-size: 1.2rem;
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
