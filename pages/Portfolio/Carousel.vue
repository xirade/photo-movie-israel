<template>
  <div>
    <div class="container position-relative">
      <div class="slider postition-relative">
          <img class="big-img img-fluid animate__animated animate__fadeIn animate__fast" v-show="isLoad" :src="currentImg" @load="loaded" />
        <lazyLoaded v-show="!isLoad" />
      </div>
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="['thumbnail-image mt-2', currentIndex == index ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img class="small-img" :src="image.thumb" />
      </div>
    </div>
  </div>
</template>

<script>
import lazyLoaded from "~/pages/Portfolio/lazyLoaded.vue";
export default {
  name: "Slider",
  components: {
    lazyLoaded,
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
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970342/0030_vvllm8.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595970342/0030_vvllm8.jpg",
        },
        {
          id: "1",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963391/008_qigms0.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,g_face,h_133,w_200/v1595950977/5_djhizt.jpg",
        },
        {
          id: "2",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970338/0022_qjziqy.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595970338/0022_qjziqy.jpg",
        },
        {
          id: "3",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970339/0035_rgph7p.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1596709206/3_haxune_jnd6g3.jpg",
        },
      ],
    };
  },
  mounted: function () {
    this.startSlide();
  },

  methods: {
    next: function () {
        var active = this.currentIndex;
        active++;
        if (active >= this.images.length) {
          active = 0;
        }
        this.isLoad = false;
        this.activateImage(active);
    },
    activateImage(imgIndex) {
      this.currentIndex = imgIndex;
    },
    loaded() {
      this.isLoad = true;
    },
    startSlide: function () {
      this.timer = setInterval(this.next, 8000);
    },
  },
   computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length].big;
    }
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  display: block;
  height: 600px;
  max-width: 100%;
}

.big-img {
  position: absolute;
  object-fit: cover;
  background-position: center center;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: "object-fit: cover;";
  z-index: 0;
  height: 100%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 0.25rem rgba(160, 231, 243, 0.3));
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
  right: 25%;
}

.prev {
  left: 25%;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
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
  padding: 2px;
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
  box-shadow: 2px 2px 6px 1px rgba(160, 231, 243, 0.3);
}

@media (max-width: 575.98px) {
  .slider {
    max-width: 100%;
    height: 250px;
  }
  .next {
    right: 2% !important;
  }

  .prev {
    left: 2% !important;
  }
}

@media (max-width: 767.98px) {
  .next {
    right: 10% !important;
  }

  .prev {
    left: 10% !important;
  }
}

@media (max-width: 991.98px) {
  .next {
    right: 15% !important;
  }

  .prev {
    left: 15% !important;
  }
}

@media (max-width: 1199.98px) {
  .next {
    right: 20%;
  }

  .prev {
    left: 20%;
  }
}
</style>
