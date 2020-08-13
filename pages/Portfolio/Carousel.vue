<template>
  <div class="container mt-2">
    <div class="px-0 position-relative">
      <div class="slider embed-responsive embed-responsive-16by9 z-depth-1-half position-relative">
        <iframe class=" animate__animated animate__fadeIn animate__faster video-fluid embed-responsive-item" :src="currentImg" 
                @load="loaded"
                allow="autoplay;fullscreen;"
                frameborder=“0”
                loop="1">
                </iframe>
      </div>
    </div>
    <div class="thumbnails position-relative">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="['thumbnail-image', currentIndex == index ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img class="small-img mt-2 mr-2  z-depth-1-half" :src="image.thumb" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  components: {
  },
  data() {
    return {
      currentIndex: 0,
      timer: null,
      isLoad: false,
      images: [
        {
          id: "0",
          big:
            "https://res.cloudinary.com/dxeebmzdv/video/upload/v1596981450/coverr-001-aerial-upward-sunrise-river-buildings-orange-sky-buenos-aires-argentina-quarantine-drone-4k-16x9-6885_beqwis.mp4",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597000728/Screenshot_from_2020-08-09_22-09-37_ardyrr.png",
        },
        {
          id: "1",
          big:
            "https://res.cloudinary.com/dxeebmzdv/video/upload/v1596981429/coverr-53-new-zealand-lion-rock-piha-couple-7108_lngs6m.mp4",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597000728/Screenshot_from_2020-08-09_22-10-16_jrgtlc.png",
        },
        {
          id: "2",
          big:
            "https://res.cloudinary.com/dxeebmzdv/video/upload/v1596981458/coverr-motorcyclist-drives-through-palms-road-1585645703955_fy3ini.mp4",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597000728/Screenshot_from_2020-08-09_22-08-51_o6j7kh.png",
        },
        {
          id: "3",
          big:
            "https://res.cloudinary.com/dxeebmzdv/video/upload/v1595969486/%D0%B4%D1%80%D0%BE%D0%BD_aonvwi.mp4",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597000859/background_n0nne4_dczfl9.jpg",
        },
        {
          id: "4",
          big:
            "https://res.cloudinary.com/dxeebmzdv/video/upload/v1596997157/coverr-training-with-mountain-landscape-1585726970130_rok6nw.mp4",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597000727/Screenshot_from_2020-08-09_22-06-56_eemlwu.png",
        },
      ],
    };
  },
  methods: {
    next: function () {
        var active = this.currentIndex + 1;
        if (active >= this.images.length) {
          active = 0;
        }
        this.isLoad = false;
        this.activateImage(active);
    },
    // prev: function () {
    //     var active = this.currentIndex - 1;
    //     if (active >= this.images.length) {
    //       active = 0;
    //     }
    //     this.isLoad = false;
    //     this.activateImage(active);
    // },
    activateImage(imgIndex) {
      this.isLoad = false;
      this.currentIndex = imgIndex;
    },
    loaded() {
      this.isLoad = true;
    },
  },
   computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length].big;
    },
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.big-img, .small-img {
  object-fit: cover;
  object-position: center;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: "object-fit: cover; object-position: center;";
  z-index: 0;
  height: 100%;
  width: 100%;
}

/* .prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 30%;
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
  color: rgba(255, 255, 255, 0.9) !important;
}

.prev:active,
.next:active {
  background-color: rgba(255, 255, 255, 0.4);
} */

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

@media (min-width: 300px) and (max-width: 574px) {
  .prev, .next {
    top:0 !important;
  }
}
@media (max-width: 575.98px) {
  .slider {
    max-width: 100%;
    height: 300px;
  }
  .prev, .next {
    top:10%;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .prev, .next {
    top:10%;
  }
  }
</style>
