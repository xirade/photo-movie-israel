<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item grid-item--height3 grid-img" :style="{ backgroundImage: 'url(' + getImage(1) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}">
      </div>
      <div class="grid-item grid-item--width2 grid-item--height3"
      :style="{ backgroundImage: 'url(' + getImage(2) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width2 grid-item--height4"
      :style="{ backgroundImage: 'url(' + getImage(3) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width3 grid-item--height4"
      :style="{ backgroundImage: 'url(' + getImage(4) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width2 grid-item--height3"
      :style="{ backgroundImage: 'url(' + getImage(5) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + getImage(6) + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
    </div>
  </div>
</template>

<script>
import familiesQuery from '~/apollo/queries/portfolio/families.gql';
export default {
    data() {
        return {
            api_url: process.env.strapiBaseUri,
            families: []
        }
    },
    apollo: {
    families: {
      prefetch: true,
      query: familiesQuery,
    },
  },
  methods: {
    getImage(id) {
      for (const street in this.families) {
        let img = this.families.find((img) => img.id == id);
        return img.image.url;
      }
    }
  }
};
</script>

<style scoped>

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

.grid-item--width1 { width:  20%; }
.grid-item--width2 { width:  40%; }
.grid-item--width3 { width:  60%; }
.grid-item--width4 { width:  100%; }

.grid-item--height2 { height: 200px; }
.grid-item--height3 { height: 260px; }
.grid-item--height4 { height: 420px; }
.grid-item--height5 { height: 540px; }


@media (min-width: 300px) and (max-width: 767px) {
    .grid-item,.grid-item--width2 {
  width: 100%;
}
}
</style>
