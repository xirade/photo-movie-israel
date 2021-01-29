<template>
  <div class="container mt-2">
    <div class="px-0 position-relative">
      <div class="slider position-relative">
        <Loaded v-if="isLoad == true" />
        <transition name="slider" mode="out-in">
          <div
            class="embed-responsive embed-responsive-16by9"
            v-for="bigItem in [currentIndex]"
            :key="bigItem"
          >
            <video @load="loaded" class="embed-responsive-item" autoplay muted>
              <source :src="currentImg.big.url" type="video/mp4" />
              <source :src="currentImg.big.url" type="video/ogg" />
              <source :src="currentImg.big.url" type="video/webm" />
            </video>
          </div>
        </transition>
        <a class="prev text-white" @click="prev">&#10094;</a>
        <a class="next text-white" @click="next">&#10095;</a>
      </div>
    </div>
    <div class="thumbnails">
      <div class="thumbnail-container">
        <div
          v-for="(image, index) in aerophotos"
          :key="image.id"
          :class="['thumbnail-img', currentIndex == index ? 'active' : '']"
          @click="activateImage(index)"
        >
          <v-lazy-image class="small-img mt-2" :src="image.thumb.url" :alt="image.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loaded from "~/pages/Portfolio/Loaded.vue";
import VLazyImage from "v-lazy-image";
// import aerophotosQuery from "~/apollo/queries/portfolio/aerophotos.gql";
export default {
  transition: {
    name: "slider",
    mode: "out-in",
  },
  components: { Loaded },
  data() {
    return {
      error: null,
      api_url: process.env.strapiBaseUri,
      currentIndex: 0,
      isLoad: null,
      jumpSlideWidth: 0,
      scrollAmount: 0,
      aerophotos: [
        {
          id: "1",
          title: "View",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794537/Screenshot_from_2020_08_09_22_10_16_jrgtlc_613257f510.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598794519/coverr_53_new_zealand_lion_rock_piha_couple_7108_lngs6m_71352101dd.mp4",
          },
        },
        {
          id: "2",
          title: "City",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794403/Screenshot_from_2020_08_09_22_09_37_ardyrr_0718472192.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598794241/coverr_001_aerial_upward_sunrise_river_buildings_orange_sky_buenos_aires_argentina_quarantine_drone_4k_16x9_6885_beqwis_433b7ca8fa.mp4",
          },
        },
        {
          id: "3",
          title: "Moto",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794098/Screenshot_from_2020_08_09_22_08_51_o6j7kh_c7b72c6ae3.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598793968/coverr_motorcyclist_drives_through_palms_road_1585645703955_fy3ini_3a0e278342.mp4",
          },
        },
        {
          id: "4",
          title: "Montain",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598793747/coverr_training_with_mountain_landscape_1585726970130_rok6nw_ebe24d32b3.mp4",
          },
        },
        {
          id: "5",
          title: "Sea",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
        },
        {
          id: "6",
          title: "Sea",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
        },
        {
          id: "7",
          title: "Sea",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
        },
        {
          id: "8",
          title: "Sea",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
        },
        {
          id: "9",
          title: "Sea",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
        },
        {
          id: "10",
          title: "Sea",
          thumb: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png",
          },
          big: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4",
          },
        },
      ],
    };
  },
  components: {
    VLazyImage
  },
  // apollo: {
  //   aerophotos: {
  //     prefetch: true,
  //     query: aerophotosQuery,
  //   },
  // },
  methods: {
    loaded() {
      this.currentImg.big.url == null
        ? (this.isLoad = true)
        : (this.isLoad = false);
    },
    next() {
      const container = this.$el.querySelector(".thumbnails");
      this.currentIndex += 1;
      if (this.currentIndex >= this.aerophotos.length) {
        this.currentIndex = 0;
      }
      this.activateImage(this.currentIndex);
      this.scrollNext(this.currentIndex);
    },
    prev() {
      const container = this.$el.querySelector(".thumbnails");
      this.currentIndex = this.currentIndex - 1;
      if (this.currentIndex <= this.aerophotos.indexOf(0)) {
        this.currentIndex = this.aerophotos.length - 1;
      }
      this.activateImage(this.currentIndex);
      this.scrollPrev(this.currentIndex);
    },
    scrollNext(active) {
      const imgSmall = this.$el.querySelector(".thumbnail-img");
      const container = this.$el.querySelector(".thumbnails");
      container.scrollLeft = imgSmall.offsetWidth * active;
      window.scroll({
        left: container.scrollLeft,
        behavior: "smooth",
      });
    },
    scrollPrev(active) {
      const imgSmall = this.$el.querySelector(".thumbnail-img");
      const container = this.$el.querySelector(".thumbnails");
      container.scrollLeft -= imgSmall.offsetWidth;
      window.scroll({
        left: container.scrollLeft,
        behavior: "smooth",
      });
    },
    activateImage(imgIndex) {
      this.isLoad = false;
      this.currentIndex = imgIndex;
    },
  },
  async mount() {
    try {
      this.aerophotos = await this.aerophotos.find();
      // loadBar();
    } catch (error) {
      this.error = error;
      console.log(this.error);
    }
  },
  computed: {
    currentImg() {
      return this.aerophotos[
        Math.abs(this.currentIndex) % this.aerophotos.length
      ];
    },
  },
};
</script>

<style lang="scss" scoped>

.v-lazy-image {
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

.slider-enter-active,
.slider-leave-active {
  transition: opacity 0.35s ease-in;
}
.slider-enter,
.slider-leave-to {
  opacity: 0;
}

.slider {
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.big-img,
.small-img {
  object-fit: cover;
  object-position: center;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: "object-fit: cover; object-position: center;";
  z-index: 0;
  height: 100%;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.2s ease-out;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  z-index: 2;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  color: rgba(0, 0, 0) !important;
  background-color: rgba(255, 255, 255, 0.4);
}

.prev:active,
.next:active {
  background-color: rgba(255, 255, 255, 0.4);
}

.thumbnails::-webkit-scrollbar {
  display: none;
}

.thumbnails {
  scroll-behavior: smooth;
  display: flex;
  scrollbar-width: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: calc(100% - 50px);
  margin: 0 auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.thumbnail-container {
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  transition: transform 1s ease;
  cursor: pointer;
}

.thumbnail-img {
  scroll-snap-align: start;
  width: 150px;
  margin-right: 15px;
}

.thumbnail-img:last-child {
  margin-right: 0;
}

.thumbnail-img > .small-img {
  transition: all 250ms;
  opacity: 0.6;
}

.thumbnail-img:hover > .small-img,
.thumbnail-img.active > .small-img {
  opacity: 1;
}

@media (min-width: 0px) and (max-width: 767.98px) {
  .thumbnail-img {
    width: 80px;
    margin-right: 15px;
  }
}
</style>
