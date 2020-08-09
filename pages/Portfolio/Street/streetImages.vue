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
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595950915/2_vzvvds.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1595970088/0026_nfvrt1.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596971738/3612581_18010316150060733791_vsk8xn.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596971738/whats-for-sale-with-a-view-show-hero_rphdyd.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596971740/116281457_gu2tze.jpg',
                'https://res.cloudinary.com/dxeebmzdv/image/upload/v1596971743/241074099_dqe7q4.jpg'
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
