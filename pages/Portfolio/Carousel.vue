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
import aerophotosQuery from "~/apollo/queries/portfolio/aerophotos.gql";
export default {
  name: "Slider",
  components: {},
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      currentIndex: 0,
      timer: null,
      isLoad: false,
      aerophotos: [],
      items: [],
    };
  },
  apollo: {
    aerophotos: {
      prefetch: true,
      query: aerophotosQuery,
    },
  },
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
