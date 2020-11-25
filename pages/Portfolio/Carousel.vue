<template>
  <client-only>
    <div class="container mt-2">
      <div class="px-0 position-relative">
        <div
          class="slider embed-responsive embed-responsive-16by9 z-depth-1-half position-relative"
        >
          <!-- <iframe class=" animate__animated animate__fadeIn animate__faster video-fluid embed-responsive-item" 
                @load="loaded"
                allow="autoplay;fullscreen;"
                frameborder=“0”
                loop="1"
                :src="items"
                type="video/mp4"
                >
          </iframe> -->
          <div v-for="i in [currentIndex]" :key="i">
          <video 
           controls
           :src="currentImg">
           <source :src = "currentImg" type="video/mp4">
          </video>
          </div>
          <a class="prev text-white" @click="prev">&#10094;</a>
          <a class="next text-white" @click="next">&#10095;</a>
        </div>
      </div>
      <div class="thumbnails position-relative">
        <div
          v-for="(image, index) in aerophotos"
          :key="image.id"
          :class="['thumbnail-image', currentIndex == index ? 'active' : '']"
          @click="activateImage(index)"
        >
          <img class="small-img mt-2 mr-2 z-depth-1-half" :src="image.thumb.url" />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
// import aerophotosQuery from "~/apollo/queries/portfolio/aerophotos.gql";
export default {
  name: "Slider",
  components: {},
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      currentIndex: 0,
      timer: null,
      isLoad: false,
      aerophotos: [
      {
        "id": "1",
        "title": "View",
        "thumb": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794537/Screenshot_from_2020_08_09_22_10_16_jrgtlc_613257f510.png"
        },
        "big": {
          "url": "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598794519/coverr_53_new_zealand_lion_rock_piha_couple_7108_lngs6m_71352101dd.mp4"
        }
      },
      {
        "id": "2",
        "title": "City",
        "thumb": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794403/Screenshot_from_2020_08_09_22_09_37_ardyrr_0718472192.png"
        },
        "big": {
          "url": "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598794241/coverr_001_aerial_upward_sunrise_river_buildings_orange_sky_buenos_aires_argentina_quarantine_drone_4k_16x9_6885_beqwis_433b7ca8fa.mp4"
        }
      },
      {
        "id": "3",
        "title": "Moto",
        "thumb": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794098/Screenshot_from_2020_08_09_22_08_51_o6j7kh_c7b72c6ae3.png"
        },
        "big": {
          "url": "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598793968/coverr_motorcyclist_drives_through_palms_road_1585645703955_fy3ini_3a0e278342.mp4"
        }
      },
      {
        "id": "4",
        "title": "Montain",
        "thumb": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598793783/Screenshot_from_2020_08_09_22_06_56_eemlwu_b3d614102e.png"
        },
        "big": {
          "url": "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598793747/coverr_training_with_mountain_landscape_1585726970130_rok6nw_ebe24d32b3.mp4"
        }
      },
      {
        "id": "5",
        "title": "Sea",
        "thumb": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599023305/thumbnail_background_n0nne4_4547397537_3f0366687b.jpg"
        },
        "big": {
          "url": "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598271476/dron_6dd8c1c9d5.mp4"
        }
      }
    ],
      items: [],
    };
  },
  // apollo: {
  //   aerophotos: {
  //     prefetch: true,
  //     query: aerophotosQuery,
  //   },
  // },
  methods: {
    next: function () {
      var active = this.currentIndex + 1;
      if (active >= this.aerophotos.length) {
        active = 0;
      }
      this.isLoad = false;
      this.activateImage(active);
    },
    prev: function () {
      var active = this.currentIndex - 1;
      if (active >= this.aerophotos.length) {
        active = 0;
      }
      this.isLoad = false;
      this.activateImage(active);
    },
    activateImage(imgIndex) {
      this.isLoad = false;
      this.currentIndex = imgIndex;
    },
    loaded() {
      this.isLoad = true;
    },
    // changeVideo() {
    //   let totalAero = this.aerophotos;
    //   for (let index = 0; index < totalAero.length; index++) {
    //     this.items.push(totalAero[index].big.url);
    //   }
    //   this.videoUrl = 
    //     this.items[Math.abs(this.currentIndex) % this.items.length];
    // },
  },
  computed: {
    currentImg: function () {
      let result = this.items
      let totalAero = this.aerophotos;
      for (let index = 0; index < totalAero.length; index++) {
        result.push(totalAero[index].big.url);
      }
      return result[Math.abs(this.currentIndex) % result.length];
    },
  },
};
</script>

<style scoped>
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

.thumbnails {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.thumbnail-image {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
}

.thumbnail-image > .small-img {
  width: 100%;
  height: auto;
  transition: all 250ms;
  opacity: 0.6;
}

.thumbnail-image:hover > .small-img,
.thumbnail-image.active > .small-img {
  opacity: 1;
}

@media (max-width: 575.98px) {
  .slider {
    max-width: 100%;
    height: 300px;
  }
}
</style>
