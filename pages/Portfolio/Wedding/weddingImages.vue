<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item grid-item--width3 grid-item--height4 grid-img" :style="{ backgroundImage: 'url(' + streetImg[0] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}">
      </div>
      <div class="grid-item grid-item--width2 grid-item--height4"
      :style="{ backgroundImage: 'url(' + streetImg[1] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + streetImg[2] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
      :style="{ backgroundImage: 'url(' + streetImg[3] + ')', backgroundSize: 'cover',
      backgroundPosition: 'center'}"></div>
      <div class="grid-item grid-item--width4 grid-item--height5"
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
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596976496/monet-malatino-wedding-thumb_ihm8nb.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596792727/008_qigms0_e9d4gq.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596976509/Beach_Wedding_Crim_Barefoot_Beach_Bride_uapndf.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950977/5_djhizt.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596976482/e_t-wedding-523_oj0onq.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596976468/5e2762f7ab49fd1ed25a9dc4_l7arm8.jpg'
            ]
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
