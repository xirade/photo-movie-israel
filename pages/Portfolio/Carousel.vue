<template>
  <div class="container position-relative">
    <div class="slider postition-relative">
      <transition>
        <img
          class="img-fluid animate__animated animate__fadeIn animate__delay-0.3s"
          v-show="isLoad"
          :src="url"
          @load="loaded"
        />
      </transition>
      <lazyLoaded v-show="!isLoad" />
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
      url: "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970342/0030_vvllm8.jpg",
      currentIndex: 0,
      timer: null,
      images: [
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963391/008_qigms0.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970338/0022_qjziqy.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970339/0035_rgph7p.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970342/0030_vvllm8.jpg"
      ],
      isLoad: false,
    };
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    next: function () {
      this.url = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
      this.isLoad = false;
    },
    prev: function () {
      this.url = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
      this.isLoad = false;
    },
    loaded() {
      this.isLoad = true;
    },
 startSlide: function() {
    this.timer = setInterval(this.next, 8000);
  },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  opacity: 0;
}

.slider {
  display: block;
  height: 600px;
  max-width: 100%;
}

img {
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
