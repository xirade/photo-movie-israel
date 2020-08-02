<template>
  <div>
      <img v-prlx="{speed: 0.3, preserveInitialPosition: false}" class="bg" src="https://res.cloudinary.com/dxeebmzdv/image/upload/v1596198873/background_n0nne4.jpg">
      <mdb-mask class="position-relative" overlay="black-slight" style="height:95vh;" flexCenter>
        <div class="header-main d-flex flex-column mb-auto">
          <img
            src="~/assets/img/4log.png"
            height="120px"
            width="250px"
            class="mx-auto mt-5"
            alt="Logo"
          />
          <div id="animateFadeIn_1">
            <transition
              appear
              appear-active-class="fade-enter-active-line-1"
              @before-appear="beforeAppear"
              @appear="appear"
              @after-appear="afterAppear"
            >
              <span class="active_line_1"></span>
            </transition>
          </div>
              <h1 class="display-4 title-header text-center white-text animated fadeInDown slower">
                FROM A DIFFERENT
                <hr class="m-0" />
                POINT OF VIEW
              </h1>
        </div>
        <span
          class="active_line_2"
          data-aos="goLine_1"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        ></span>
      </mdb-mask>

    <div class="service container bg-dark p-0" style="max-width: 100%;">
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
              class="card-image"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1596199747/photo-1590944335664-015cc7b65db1_fjdg8n.jpg') no-repeat center;
              background-size: cover;"
            >
              <mdb-view hover></mdb-view>
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="orange-text font-weight-bold">
                  <mdb-icon icon="camera" />PHOTOSHOOT
                </h5>
                <mdb-card-title tag="h3" class="pt-2 text-white">
                  <strong>This is card title</strong>
                </mdb-card-title>
                <p class="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!.
                </p>
                <mdb-btn color="orange" class="white-text">
                  <mdb-icon icon="clone left" />View project
                </mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col class="pt-0 px-0" lg="4">
            <mdb-card
              class="card-image"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1596200217/photo-1543235074-4768b5c2233c_enepwc.jpg') no-repeat;
              background-size: cover;"
            >
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="blue-text font-weight-bold"><mdb-icon icon="video" />VIDEOSHOOT</h5>
                <mdb-card-title tag="h3" class="pt-2 text-white">
                  <strong>This is card title</strong>
                </mdb-card-title>
                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!.
                </p>
                <mdb-btn color="blue" class="text-black">
                  <mdb-icon icon="clone left" />View project
                </mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col class="pt-0 px-0" lg="4">
            <mdb-card
              class="card-image"
              style="background: url('https://res.cloudinary.com/dxeebmzdv/image/upload/v1596200689/photo-1527977966376-1c8408f9f108_w5rozf.jpg') no-repeat center;
              background-size: cover;"
            >
              <mdb-view hover></mdb-view>
              <mdb-card-body class="text-center rgba-stylish-strong">
                <h5 class="green-text font-weight-bold">
                  <mdb-icon icon="helicopter" />AEROPHOTO
                </h5>
                <mdb-card-title tag="h3" class="pt-2 text-white">
                  <strong>This is card title</strong>
                </mdb-card-title>
                <p class="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!.
                </p>
                <mdb-btn color="green" class="text-black">
                  <mdb-icon icon="clone left" />View project
                </mdb-btn>
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
          class="h3 text-black-50 mb-5 w-75 text-center"
          style="font-family: 'DINNeuzeitGroteskLTW01-BdCn';"
        >
          NEW PHOTOGRAPHY OPPORTUNITIES USING DRONES
        </p>
        <p
          class="h5 w-75 text-center grey-text mb-4"
          style="font-weight: lighter;"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          est vitae suscipit, eligendi et tempora reprehenderit odio. Saepe
          animi, aliquid voluptates culpa provident, suscipit laudantium
          dignissimos hic, dolorum explicabo dolorem? Enim architecto obcaecati,
          nihil, dolore iure repellendus eligendi aut corrupti magnam magni
          laborum. Eum doloremque culpa minima? Laborum, ipsum doloribus.
        </p>
        <mdb-btn color="yellow darken-3" class="px-5 mb-auto"
          >Read more</mdb-btn
        >
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
    <div class="w-100 bg-light">
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
  em: "#animateFadeIn_1",
  methods: {
    beforeAppear: function(em) {
      console.log("beforeAppear");
    },
    appear: function(em) {
      console.log("appear!");
    },
    afterAppear: function(em) {
      console.log("afterAppear!");
    }
  },
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
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
  src: url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.eot");
  src: url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.eot?#iefix")
      format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.woff2")
      format("woff2"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.woff")
      format("woff"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.ttf")
      format("truetype"),
    url("https://db.onlinewebfonts.com/t/bb2e1211dfd31103079dbce7c49e1d4e.svg#DINNeuzeitGroteskLTW01-BdCn")
      format("svg");
}
@import "node_modules/aos/src/sass/aos.scss";
@import "~/assets/css/main.css";
.first {
  height: 110vh;
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
  background-color: #fffde7;
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
