<template>
  <div class="container mt-2">
    <div class="px-0 position-relative">
      <div class="slider postition-relative">
          <img class="big-img img-fluid animate__animated animate__fadeIn animate__fast" v-show="isLoad" :src="currentImg" @load="loaded" />
        <lazyLoaded v-show="!isLoad" />
      </div>
    </div>
    <div class="thumbnails position-relative">
      <div
        v-for="(image, index) in images"
        :key="image.id"
        :class="['thumbnail-image', currentIndex == index ? 'active' : '']"
        @click="activateImage(index)"
      >
        <img v-if="image.id < 4" class="small-img ml-2" :src="image.thumb" />
      </div>
        <a class="next" @click="next">&#10095;</a>
        <a class="prev" @click="prev">&#10094;</a>
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
        {
          id: "4",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950978/7_qfounv.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595950978/7_qfounv.jpg",
        },
        {
          id: "5",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1596709015/%D1%81%D0%BA%D0%B0%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_qwfr6z.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1596709015/%D1%81%D0%BA%D0%B0%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_qwfr6z.jpg",
        },
        {
          id: "6",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950779/1_guaw1o.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595950779/1_guaw1o.jpg",
        },
        {
          id: "7",
          big:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950915/2_vzvvds.jpg",
          thumb:
            "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595950915/2_vzvvds.jpg",
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
    prev: function () {
        var active = this.currentIndex - 1;
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
  box-shadow: 0 0 0.8rem rgba(160, 231, 243, 0.3);
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
