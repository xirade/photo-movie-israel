<template>
  <div>
    <div class="jarallax">
      <div class="clippy-bg rgba-stylish-slight"></div>
      <img
        class="jarallax-img"
        src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596198873/background_n0nne4.jpg"
      />
      <div style="height: 90vh" flexCenter>
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
      </div>
    </div>
    <div
      class="service container bg-dark p-0"
      style="max-width: 100%; z-index: 0"
    >
      <span
        class="active_line_1 line-bg"
        data-aos="goLine_service"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      ></span>
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
      <!-- TODO: Dynamic content strapi -->
      <div
        class="w-100 position-relative"
        style="background-color: #212121; z-index: 2"
      >
        <mdb-row class="justify-content-center py-5 mx-auto">
          <mdb-col
            class="p-3"
            xl="6"
            v-for="(item, index) in items"
            :key="item.id"
          >
            <mdb-card
              class="card-image h-100 border border-dark"
              :style="{
                backgroundImage: 'url(' + item.image.url + ')',
                backgroundSize: 'cover',
              }"
            >
              <div
                class="text-white text-center rgba-brown-light py-5 px-4 h-100"
              >
                <div
                  class="z-depth-1 mx-auto p-3 h-100 d-flex flex-column align-items-center"
                  style="background-color: #2e2e2e99"
                >
                  <h5
                    :class="[
                      'text-' + item.color,
                      'font-weight-bold',
                      'text-uppercase',
                    ]"
                  >
                    <mdb-icon :icon="item.icon" />{{ item.name }}
                  </h5>
                  <mdb-card-title tag="h4" class="pt-2 h2-responsive">
                    <strong>{{ item.title }}</strong>
                  </mdb-card-title>
                  <mdb-container>
                    <p class="text-white">
                      <span v-html="item.description"></span>
                    </p>
                  </mdb-container>
                  <nuxt-link
                    class="mt-auto"
                    :to="isModalVisible == true ? '/' : '/services'"
                  >
                    <mdb-btn :outline="item.color" @click="showModal(index)">
                      <mdb-icon
                        class="text-light"
                        icon="shopping-bag left"
                      /><span class="text-light">Узнать больше</span>
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
    <div
      class="container bg-light text-black"
      style="max-width: 100%; height: 120vh"
    >
      <div
        class="d-flex align-items-center flex-center flex-column"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-out"
      >
        <div class="container text-center mx-auto">
          <h2 class="display-1 mt-auto mb-3" style="color: #454545">
            <strong>
              WE TAKE PICTURES
              <hr class="m-0" />
              FROM ABOVE
            </strong>
          </h2>
          <p class="h2-responsive text-black-50 text-uppercase mb-5">
            Добро пожаловать на мой сайт!
          </p>
          <p class="h5 text-center grey-text mb-4" style="font-weight: lighter">
            Я Павел, режисер видео-монтажа, видеограф и фотограф. Опыт работы
            более 12 лет. Работаю по всему Израилю. Помогаю предпринимателям и
            их семьям создать брендированный фото-видео контент об их
            профессиональной и личной жизни. Преимущество работы со мной:
            работаю в программах Photoshop, Adobe Premier, Adobe After Effect,
            Davinci, Lightroom.Что это значит для вас? Фантазиям и креативности
            вашей съемки почти нет границ.Увлекаюсь высокотехнологичной съёмкой,
            постоянно обучаясь новым техникам видеосъемки и монтажа.
          </p>
          <nuxt-link class="mb-auto" :to="'/about'">
            <mdb-btn color="yellow darken-3" class="px-5">
              <mdb-icon icon="clone left" />Read more
            </mdb-btn>
          </nuxt-link>
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
      :items="items"
      v-show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import Modal from "~/components/modal.vue";
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
  mdbIcon,
} from "mdbvue";
export default {
  data() {
    return {
      selectedIndex: 0,
      isModalVisible: false,
      items: [
        {
          id: "1",
          name: "Фотосъемка",
          title: "Для бизнесменов, специалистов, фрилансеров",
          description:
            "Виды съемки: <br/> Интеръерная, индустриальная, аэросъемка, панорамная, репортажная, иммиджевая, рекламно- постановочная",
          listprice: [{}],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596199747/photo-1590944335664-015cc7b65db1_fjdg8n.jpg",
          },
          icon: "camera",
          color: "warning",
          visible: false,
        },
        {
          id: "2",
          name: "Видеосъемка",
          title: "Для компаний, предпринимателей, маркетологов",
          description:
            "Виды съемки: <br/> Рекламных, промо, информационных и развлекательных роликов, а также корпоративных фильмов.",
          listprice: [{}],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596200217/photo-1543235074-4768b5c2233c_enepwc.jpg",
          },
          icon: "video",
          color: "info",
          visible: false,
        },
        {
          id: "3",
          name: "Семейная съемка",
          title: "Для торжеств и знаменательных дней",
          description:
            "Виды съемки:<br/> Семейная, индивидуальная, беременных, нью-борн, бритмила, бармицва, батмицва, лав-стори, свадебная, детская, дни рождения, торжества.",
          listprice: [{}],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1600277481/96681721-a-movie-production-clapper-board-hands-with-a-movie-clapperboard-on-grey-background-with-copy-space-_afklyl.jpg",
          },
          icon: "film",
          color: "success",
          visible: false,
        },
        {
          id: "4",
          name: "Свадебная съемка",
          title: "Для свадеб в Израиле и Европе ",
          description:
            "Виды съемки: <br/> Фото-видеосъемка свадебной церемонии, фото-видеосъемка сборы,   фото-видеосъемка ",
          listprice: [
            {
              id: "1",
              name: "Wedding Photo",
              color: "gray",
              price: 2500,
              description:
                "- Полный свадебный день <br>- Предварительная консультация <br>- Ретушь до 50 кадров <br>- Фотоальбом 30×30 на 15 разворотов <br>- Использование профессионального света <br>- Анонс 15-20 фотографий в течение 10 дней <br> Срок готовности — 30 дней",
              visible: true,
            },
            {
              id: "2",
              name: "Wedding Movie",
              color: "light",
              price: 3000,
              description:
                "- Полный день работы видеооператора <br>- Клип highlights 2-4 минуты <br>- Фильм 15-30 минут <br>- Клип instagram до 1 минуты <br>- Запись церемонии <br>- Квадрокоптер",
              visible: false,
            },
          ],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511315/5_djhizt_0ba93f0786.jpg",
          },
          icon: "heart",
          color: "danger",
          visible: true,
          val: "day"
        },
      ],
    };
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
    mdbIcon,
    Modal,
  },
  transition: "fade",
  methods: {
    showModal(index) {
      this.selectedIndex = index;
      this.isModalVisible = this.items[index].visible;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/aos/src/sass/aos.scss";

.first {
  height: 110vh;
}

h4 {
  color: #e3deca;
}

p {
  font-size: 18px;
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
.display-1,
.display-3,
.title-header,
.h3 {
  font-family: 'Oswald', sans-serif;
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
