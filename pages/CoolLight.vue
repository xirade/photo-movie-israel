<template>
  <div class="w-100">
    <CoolLightBox
      :items="getItems"
      :index="index"
      loop
      @close="index = null"
    ></CoolLightBox>
    <div class="w-100 h-100 p-1">
      <mdb-view class="zoom overlay h-100">
        <video
          class="embed-responsive embed-responsive-16by9 m-0"
          autoplay
          loop
          muted
        >
          <source :src="sliders[0].video.url" type="video/mp4" />
          <source :src="sliders[0].video.url" type="video/ogg" />
          <source :src="sliders[0].video.url" type="video/webm" />
        </video>
        <mdb-mask
          waves
          overlay="stylish-light"
          class="white-text d-flex flex-column h-100"
        >
          <p class="display-4 my-auto mx-auto flex-center">
            {{ sliders[0].title }}
          </p>
          <button class="full-img-slider" v-on:click="setIndex(0)"></button>
        </mdb-mask>
      </mdb-view>
    </div>
      <div class="grid">
        <div class="grid-sizer"></div>
        <div
          class="grid-item"
          v-for="(slider, index) in sliders"
          :key="slider.id"
        >
          <mdb-view class="zoom overlay h-100 z-depth-1">
            <img class="grid-img " :src="slider.image.url" :alt="slider.title" />
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
// import slidersQuery from "~/apollo/queries/slider/sliders.gql";
import CoolLightBox from "vue-cool-lightbox";
import { mdbView, mdbMask } from "mdbvue";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      sliders: [
        {
          id: "1",
          title: "Beautiful view",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599220403/background_n0nne4_8cda543196.jpg",
          },
          video: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
          published_at: "2020-08-20T19:00:00.000Z",
        },
        {
          id: "2",
          title: "Beautiful girl",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950494/kudri_5abfe601c6.jpg",
          },
          video: null,
          published_at: "2020-08-21T19:30:00.000Z",
        },
        {
          id: "3",
          title: "Little girl",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950572/0013_rg5rks_ddi1rd_73cee6bec5.jpg",
          },
          video: null,
          published_at: "2020-08-15T18:00:00.000Z",
        },
        {
          id: "4",
          title: "Big city life",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950739/3_haxune_jnd6g3_47450709a9.jpg",
          },
          video: null,
          published_at: "2020-08-24T09:00:00.000Z",
        },
        {
          id: "5",
          title: "Wedding",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950901/5_djhizt_cbfb71ed5d.jpg",
          },
          video: null,
          published_at: "2020-08-26T09:00:00.000Z",
        },
        {
          id: "6",
          title: "Beautiful view",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950678/skameika_059cf37e22.jpg",
          },
          video: null,
          published_at: "2020-08-06T09:00:00.000Z",
        },
        {
          id: "7",
          title: "Girl",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596709012/%D0%94%D0%B5%D0%B2%D0%BE%D1%87%D0%BA%D0%B0_ioyama.jpg",
          },
          video: null,
          published_at: "2020-08-06T09:00:00.000Z",
        },
        {
          id: "8",
          title: "Glasses",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596199012/0032_z18xq2_igcbdq.jpg",
          },
          video: null,
          published_at: "2020-08-06T09:00:00.000Z",
        },
        {
          id: "9",
          title: "Family",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950978/7_qfounv.jpg",
          },
          video: null,
          published_at: "2020-08-06T09:00:00.000Z",
        },
      ],
      query: "",
      items: [],
      index: null,
      error: null,
    };
  },
  // apollo: {
  //   sliders: {
  //     prefetch: true,
  //     query: slidersQuery,
  //   },
  // },
  components: {
    CoolLightBox,
    mdbView,
    mdbMask,
  },
  methods: {
    setIndex(index) {
      this.index = index;
    },
  },
  async mount() {
    try {
      this.sliders = await this.sliders.find();
    } catch (error) {
      this.error = error;
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
    
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
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

.grid-item img {
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
</style>
