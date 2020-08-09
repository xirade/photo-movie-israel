<template>
  <div class="w-100">
    <CoolLightBox :items="items" :index="index" loop @close="index = null"></CoolLightBox>
    <div class="w-100 h-100">
      <mdb-view class="zoom overlay">
        <video class="video-fluid m-0" autoplay loop muted>
          <source :src="video" type="video/mp4" />
        </video>
        <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
          <button class="full-img-slider" v-on:click="setIndex(0)"></button>
        </mdb-mask>
      </mdb-view>
    </div>
    <div>
      <div class="position-relative grid">
        <div class="grid-sizer"></div>
        <div class="grid-item grid-item--width1 grid-item--height3">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="items[1]" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
              <button class="full-img-slider" v-on:click="setIndex(1)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
        <div class="grid-item grid-item--width4 grid-item--height3">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="items[2]" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-5 my-auto mx-auto flex-center">Adventure time</p>
              <button class="full-img-slider" v-on:click="setIndex(2)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
        <div class="grid-item grid-item--width2 grid-item--height4">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="items[3]" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
              <button class="full-img-slider" v-on:click="setIndex(3)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
        <div class="grid-item grid-item--width3 grid-item--height5">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="items[4]" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
              <button class="full-img-slider" v-on:click="setIndex(4)"></button>
            </mdb-mask>
          </mdb-view>
        </div>

        <div class="grid-item grid-item--width2 grid-item--height4">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="items[5]" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">Adventure time</p>
              <button class="full-img-slider" v-on:click="setIndex(5)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import { mdbView, mdbMask} from "mdbvue";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data: function () {
    return {
      video:
        "https://res.cloudinary.com/dxeebmzdv/video/upload/v1595969486/%D0%B4%D1%80%D0%BE%D0%BD_aonvwi.mp4",
      items: [
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970088/0026_nfvrt1.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963380/0018_dmrxjg.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596793159/0013_rg5rks_ddi1rd.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950978/7_qfounv.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596709206/3_haxune_jnd6g3.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950977/5_djhizt.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/c_fill,h_1500/v1595963385/0010_yjpe42.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/c_scale,h_1500/v1595963382/0011_ogxbtk.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963391/008_qigms0.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950978/7_qfounv.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970338/0022_qjziqy.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970339/0035_rgph7p.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970342/0030_vvllm8.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970343/0031_chkk3y.jpg",
      ],
      index: null,
    };
  },
  components: {
    CoolLightBox,
    mdbView,
    mdbMask
  },
  methods: {
    setIndex(index) {
      this.index = index;
    },
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.grid-img {
  position: absolute;
  object-fit: cover;
  object-position: center;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: "object-fit: cover; object-position: bottom;";
  top: 0;
  overflow: hidden;
  left: 0;
  width: 100%;
  height: 100%;
}
/* ---- grid ---- */

.grid {
  background: #eee;
  max-width: 100%;
}

/* clearfix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-sizer,
.grid-item {
  width: 20%;
}

.grid-item {
  height: 120px;
  float: left;
  overflow: hidden;
}

.grid-item--width1 {
  width: 40%;
}
.grid-item--width2 {
  width: 40%;
}
.grid-item--width3 {
  width: 60%;
}

.grid-item--height2 {
  height: 200px;
}
.grid-item--height3 {
  height: 260px;
}
.grid-item--height4 {
  height: 360px;
}
.grid-item--height5 {
  height: 460px;
}

.full-img-slider {
  background-color: transparent;
  border: none;
  position: absolute;
  visibility: visible;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.tool-icon {
  z-index: 1;
}
.display-5 {
  font-size: 1.4rem;
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

@media (max-width: 575px) {
  .display-5 {
    font-size: 2.5rem;
  }
}
@media (min-width: 300px) and (max-width: 767px) {
  .display-5 {
    font-size: 2.5rem;
  }
  .grid-item {
    width: 40%;
  }
  .grid-item--width1 {
    width: 60%;
  }
  .grid-item--width2 {
    width: 100%;
  }
  .grid-item--width3 {
    width: 100%;
  }
}
@media (min-width: 992px) {
  .display-5 {
    font-size: 1.9rem;
  }
}
</style>
