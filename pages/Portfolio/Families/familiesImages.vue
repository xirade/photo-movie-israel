<template>
  <div class="container">
    <div class="grid" v-for="family in portfolios" :key="family.id">
      <div class="grid-sizer"></div>
      <div
      v-for="(image,index) in family.families"
      :key="index"
        :class="
          'grid-item ' +
            `grid-item--width${image.width} ` +
            'grid-item--height5'
        "
      >
        <v-lazy-image
          :srcset="image.image.url + '?webp'"
          class="grid-img z-depth-1-half"
          :src="image.image.url"
          :alt="image.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import portfoliosQuery from "~/apollo/queries/portfolio/portfolios.gql";
export default {
  data() {
    return {
      styleObject: {
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      portfolios: []
    };
  },
  components: { VLazyImage },
  apollo: {
    portfolios: {
      prefetch: true,
      query: portfoliosQuery
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

/* ---- grid ---- */

.grid {
  background: #eee;
}

/* clearfix */
.grid:after {
  content: "";
  display: block;
  clear: both;
}

/* ---- grid-item ---- */
.grid-sizer,
.grid-item {
  width: 20%;
}

.grid-item {
  height: 120px;
  float: left;
  border: 10px solid #343a40;
}

.grid-item img {
  object-fit: cover;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: "object-fit: cover;";
  width: 100%;
  height: 100%;
}

.grid-item--width2 {
  width: 40%;
}
.grid-item--width3 {
  width: 60%;
}
.grid-item--width4 {
  width: 100%;
}

.grid-item--height5 {
  height: 480px;
}

@media (min-width: 200px) and (max-width: 993px) {
  .grid-item--height5 {
    height: 320px;
  }
  .grid-item--width2 {
    width: 100%;
  }
  .grid-item--width3 {
    width: 100%;
  }
}
</style>
