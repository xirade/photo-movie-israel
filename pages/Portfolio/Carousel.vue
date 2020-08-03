<template>
  <div class="container position-relative">
    <transition-group class="slider postition-relative" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
          <img class="img-fluid animate__animated animate__fadeIn animate__delay-0.2s" :src="currentImg" />
      </div>
    </transition-group>
        <a class="prev text-white" @click="prev">&#10094;</a>
        <a class="next text-white" @click="next">&#10095;</a>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970342/0030_vvllm8.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963391/008_qigms0.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970338/0022_qjziqy.jpg",
        "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970339/0035_rgph7p.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  // mounted: function() {
  //   this.startSlide();
  // },

  methods: {
    // startSlide: function() {
    //   this.timer = setInterval(this.next, 8000);
    // },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
     mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
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
  height: 400px;
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
