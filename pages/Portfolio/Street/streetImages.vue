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
// import streetsQuery from '~/apollo/queries/portfolio/streets.gql';
export default {
    data() {
        return {
            api_url: process.env.strapiBaseUri,
            streets: [
      {
        "id": "1",
        "title": "Magic view",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599454574/2_vzvvds_c81a39020c.jpg"
        },
        "date": "2020-09-07T05:00:00.000Z"
      },
      {
        "id": "2",
        "title": "Amazing sea",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599454713/0026_nfvrt1_1efd97413d.jpg"
        },
        "date": "2020-09-07T05:00:00.000Z"
      },
      {
        "id": "3",
        "title": "Great beach",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485274/3612581_18010316150060733791_vsk8xn_9a40cfcc9b.jpg"
        },
        "date": "2020-09-07T13:30:00.000Z"
      },
      {
        "id": "4",
        "title": "Red water",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485347/whats_for_sale_with_a_view_show_hero_rphdyd_78bffbf729.jpg"
        },
        "date": "2020-09-07T13:30:00.000Z"
      },
      {
        "id": "5",
        "title": "Blue sky",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485406/116281457_gu2tze_31d7246927.jpg"
        },
        "date": "2020-09-07T13:30:00.000Z"
      },
      {
        "id": "6",
        "title": "Wonderful sunset",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485491/241074099_dqe7q4_50121a0704.jpg"
        },
        "date": "2020-09-07T13:30:00.000Z"
      }
    ]
        }
    },
  //   apollo: {
  //   streets: {
  //     prefetch: true,
  //     query: streetsQuery,
  //   },
  // },
  methods: {
    getImage(id) {
      let img;
      for (const street in this.streets) {
        img = this.streets.find((img) => img.id == id);
      }
        return img.image.url;
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
