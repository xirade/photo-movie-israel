<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item grid-item--width3 grid-item--height4 grid-img" :style="{ backgroundImage: 'url(' + getImage(1) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}">
      </div>
      <div class="grid-item grid-item--width2 grid-item--height4"
      :style="{ backgroundImage: 'url(' + getImage(2) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + getImage(3) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + getImage(4) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + getImage(5) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + getImage(6) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
    </div>
  </div>
</template>

<script>
import streetsQuery from '~/apollo/queries/portfolio/streets.gql';
export default {
    data() {
        return {
            api_url: process.env.strapiBaseUri,
            streets: []
        }
    },
    apollo: {
    streets: {
      prefetch: true,
      query: streetsQuery,
    },
  },
  methods: {
    getImage(id) {
      for (const street in this.streets) {
        let img = this.streets.find((img) => img.id == id);
        return img.image.url;
      }
    }
  }
};
</script>

<style scoped>
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
  border: 5px solid #343a40;
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

.grid-item--height4 {
  height: 360px;
}
.grid-item--height5 {
  height: 560px;
}

@media (min-width: 300px) and (max-width: 767px) {
    .grid-item--width2 {
  width: 100%;
}
.grid-item--width3 {
  width: 100%;
}
}
</style>
