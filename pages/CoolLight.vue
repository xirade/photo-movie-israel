<template>
  <div class="w-100">
    <CoolLightBox
      :items="getItems"
      :index="index"
      loop
      @close="index = null"
    ></CoolLightBox>
    <div class="w-100 h-100 p-1">
      <mdb-view class="zoom overlay h-100" v-for="clip in myClip" :key="clip.id">
        <video
          class="embed-responsive embed-responsive-16by9 m-0"
          autoplay
          loop
          muted
          playsinline
        >
          <source :src="clip.video.url" type="video/mp4" />
          <source :src="clip.video.url" type="video/ogg" />
          <source :src="clip.video.url" type="video/webm" />
        </video>
        <mdb-mask
          waves
          overlay="stylish-light"
          class="white-text d-flex flex-column h-100"
        >
          <p class="display-4 my-auto mx-auto flex-center">
            {{ clip.title }}
          </p>
          <button class="full-img-slider" v-on:click="setIndex(0)"></button>
        </mdb-mask>
      </mdb-view>
    </div>
    <div
      v-masonry
      transition-duration="0.3s"
      column-width=".grid-sizer"
      item-selector=".grid-item"
      destroy-delay="0"
      class="grid"
    >
      <div class="grid-sizer"></div>
      <div
        v-masonry-tile
        class="grid-item"
        v-for="(slider, index) in sliders"
        :key="slider.id"
      >
        <mdb-view class="zoom overlay h-100 z-depth-1">
          <figure class="m-0">
            <picture>
              <source :srcSet="slider.image.url + '?webp'" type="image/webp" />
              <source :srcSet="slider.image.url" type="image/jpeg" />
              <img
                class="grid-img"
                :src="slider.image.url"
                :alt="slider.category"
              />
            </picture>
          </figure>
          <mdb-mask
            waves
            overlay="stylish-light"
            class="white-text d-flex flex-column h-100"
          >
            <p class="h1-responsive my-auto mx-auto flex-center">
              {{ slider.title }}
            </p>
            <button
              class="full-img-slider"
              v-on:click="setIndex(index)"
            ></button>
          </mdb-mask>
        </mdb-view>
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
      sliders:[],
      query: "",
      index: null,
      error: null
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
    }
  },
  async mount() {
    try {
      this.sliders = await this.sliders.find();
    } catch (error) {
      this.error = error;
    }
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
  computed: {
    getItems() {
      let result = [];
      for (let i = 0; i < this.sliders.length; i++) {
        result.push(this.sliders[i].image.url);
      }
      return result;
    },
     myClip() {
        return this.sliders.filter( ( item ) => {
             return item.video != null;
        });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Oswald", sans-serif;
}

/* force scrollbar */
html {
  overflow-y: scroll;
}

/* ---- grid ---- */

.grid {
  background: #fff;
}

/* clear fix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- .grid-item ---- */

.grid-sizer,
.grid-item {
  width: 33.333%;
}

.grid-item {
  float: left;
  border: 5px solid #fff;
}

.grid-img {
  display: block;
  max-width: 100%;
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

@media (max-width: 992px) {
  .grid-sizer,
  .grid-item {
    width: 50%;
  }
}
</style>
