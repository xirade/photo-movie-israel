<template>
  <div class="container mt-2" v-if="portfolios[0] != undefined">
    <div class="px-0 position-relative">
      <div class="slider position-relative">
        <Loaded v-if="isLoad == true" />
        <transition name="slider" mode="out-in">
          <div
            class="embed-responsive embed-responsive-16by9"
            v-for="bigItem in [currentIndex]"
            :key="bigItem"
          >
            <video @load="loaded" class="embed-responsive-item" autoplay muted playsinline>
              <source :src="currentImg.video.url" type="video/mp4" />
              <source :src="currentImg.video.url" type="video/ogg" />
              <source :src="currentImg.video.url" type="video/webm" />
            </video>
          </div>
        </transition>
        <a class="prev text-white" @click="prev">&#10094;</a>
        <a class="next text-white" @click="next">&#10095;</a>
      </div>
    </div>
    <div class="thumbnails">
      <div class="thumbnail-container" v-for="item in portfolios"
          :key="item.id">
        <div
          v-for="(portfolio,index) in item.items" :key="index"
          :class="['thumbnail-img', currentIndex == index ? 'active' : '']"
          @click="activateImage(index)"
        >
          <v-lazy-image
            :srcset="portfolio.thumbnail.url + '?webp'"
            class="small-img mt-2"
            :src="portfolio.thumbnail.url"
            :alt="portfolio.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loaded from "~/pages/Portfolio/Loaded.vue";
import VLazyImage from "v-lazy-image";
import portfoliosQuery from "~/apollo/queries/portfolio/portfolios.gql";
export default {
  transition: {
    name: "slider",
    mode: "out-in"
  },
  components: { Loaded },
  data() {
    return {
      error: null,
      currentIndex: 0,
      isLoad: null,
      jumpSlideWidth: 0,
      scrollAmount: 0,
      portfolios:[]
    };
  },
  components: {
    VLazyImage
  },
  apollo: {
    portfolios: {
      prefetch: true,
      query: portfoliosQuery,
    },
  },
  methods: {
    loaded() {
      this.currentImg.video.url == null
        ? this.isLoad = true
        : this.isLoad = false;
    },
    next() {
      this.currentIndex += 1;
      if (this.currentIndex >= this.portfolios[0].items.length) {
        this.currentIndex = 0;
      }
      this.activateImage(this.currentIndex);
      this.scrollNext(this.currentIndex);
    },
    prev() {
      this.currentIndex -= 1;
      if (this.currentIndex <= this.portfolios[0].items.indexOf(0)) {
        this.currentIndex = this.portfolios[0].items.length - 1;
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
        behavior: "smooth"
      });
    },
    scrollPrev(active) {
      const imgSmall = this.$el.querySelector(".thumbnail-img");
      const container = this.$el.querySelector(".thumbnails");
      if (this.portfolios[0].items.length - 1 != active) {
        container.scrollLeft -= imgSmall.offsetWidth;
      } else {
        container.scrollLeft += imgSmall.offsetWidth * active;
      }
      window.scroll({
        left: container.scrollLeft,
        behavior: "smooth"
      });
    },
    activateImage(imgIndex) {
      this.isLoad = false;
      this.currentIndex = imgIndex;
    }
  },
  async mount() {
    try {
      this.portfolios = await this.portfolios.find();
      // loadBar();
    } catch (error) {
      this.error = error;
      console.log(this.error);
    }
  },
  computed: {
    currentImg() {
      return this.portfolios[0].items[
        Math.abs(this.currentIndex) % this.portfolios[0].items.length
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
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
