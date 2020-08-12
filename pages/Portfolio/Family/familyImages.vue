<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item grid-item--height3 grid-img" :style="{ backgroundImage: 'url(' + streetImg[0] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}">
      </div>
      <div class="grid-item grid-item--width2 grid-item--height3"
      :style="{ backgroundImage: 'url(' + streetImg[1] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width2 grid-item--height4"
      :style="{ backgroundImage: 'url(' + streetImg[2] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width3 grid-item--height4"
      :style="{ backgroundImage: 'url(' + streetImg[3] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width2 grid-item--height3"
      :style="{ backgroundImage: 'url(' + streetImg[4] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + streetImg[5] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            streetImg: [
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595963375/0013_rg5rks.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596974944/family_beach_l9tgah.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596974935/poster_df0c03dca9cd4ed49daa4ddb71536fc6_pt4jlv.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596974927/bring-your-family-to-germany_kyntov.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596974919/large-multi-gen-travel-1280x640_c791jr.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596974910/happy-family_rmnzrm.jpg'
            ]
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
