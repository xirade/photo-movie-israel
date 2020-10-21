<template>
  <div class="w-100">
    <CoolLightBox :items="getItems" :index="index" loop @close="index = null"></CoolLightBox>
    <div class="w-100 h-100">
      <mdb-view class="zoom overlay">
        <video class="video-fluid m-0" autoplay loop muted>
          <source :src="getVideo(1)" type="video/mp4" />
        </video>
        <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
          <p class="display-3 my-auto mx-auto flex-center">{{getTitle(1)}}</p>
          <button class="full-img-slider" v-on:click="setIndex(0)"></button>
        </mdb-mask>
      </mdb-view>
    </div>
    <div>
      <div class="position-relative grid">
        <div class="grid-sizer"></div>
        <div class="grid-item grid-item--width1 grid-item--height3">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="getImage(2)" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">{{getTitle(2)}}</p>
              <button class="full-img-slider" v-on:click="setIndex(1)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
        <div class="grid-item grid-item--width4 grid-item--height3">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="getImage(3)" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-5 my-auto mx-auto flex-center">{{getTitle(3)}}</p>
              <button class="full-img-slider" v-on:click="setIndex(2)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
        <div class="grid-item grid-item--width2 grid-item--height4">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="getImage(4)" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">{{getTitle(4)}}</p>
              <button class="full-img-slider" v-on:click="setIndex(3)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
        <div class="grid-item grid-item--width3 grid-item--height5">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="getImage(5)" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">{{getTitle(5)}}</p>
              <button class="full-img-slider" v-on:click="setIndex(4)"></button>
            </mdb-mask>
          </mdb-view>
        </div>

        <div class="grid-item grid-item--width2 grid-item--height4">
          <mdb-view class="zoom overlay" style="position: unset;">
            <img class="grid-img" :src="getImage(6)" alt="zoom" />
            <mdb-mask waves overlay="black-light" class="white-text d-flex flex-column h-100">
              <p class="display-3 my-auto mx-auto flex-center">{{getTitle(6)}}</p>
              <button class="full-img-slider" v-on:click="setIndex(5)"></button>
            </mdb-mask>
          </mdb-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slidersQuery from "~/apollo/queries/slider/sliders.gql";
import CoolLightBox from "vue-cool-lightbox";
import { mdbView, mdbMask } from "mdbvue";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      sliders: [],
      query: '',
      items: [],
      index: null,
    };
  },
  apollo: {
    sliders: {
      prefetch: true,
      query: slidersQuery,
    },
  },
  components: {
    CoolLightBox,
    mdbView,
    mdbMask,
  },
  methods: {
    setIndex(index) {
      this.index = index;
    },
    getImage(id) {
      for (const slider in this.sliders) {
        let img = this.sliders.find((img) => img.id == id);
        return img.image.url;
      }
    },
    getTitle(id) {
      for (const slider in this.sliders) {
        let tl = this.sliders.find((tl) => tl.id == id);
        return tl.title;
      }
    },
    getVideo(id) {
      for (const slider in this.sliders) {
          let vd = this.sliders.find((vd) => vd.id == id);
          return vd.video.url  
      }
    }
  },
  computed: {
    getItems() {
      let result = this.items;
      let sliders = this.sliders;
      for (let i = 0; i < sliders.length; i++) {
        result.push(sliders[i].image.url);
      }
      return result;
    },
  },
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
  font-family: "object-fit: cover; object-position: center;";
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
