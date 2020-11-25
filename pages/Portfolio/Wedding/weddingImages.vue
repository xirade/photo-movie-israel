<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div
        class="grid-item grid-item--width3 grid-item--height4 grid-img"
        :style="[{backgroundImage: 'url(' + getImage(1) + ')'},styleObject]">
        </div>
      <div
        class="grid-item grid-item--width2 grid-item--height4"
        :style="[{ backgroundImage: 'url(' + getImage(2) + ')'},styleObject]"
      ></div>
      <div
        class="grid-item grid-item--width4 grid-item--height5"
        :style="[{ backgroundImage: 'url(' + getImage(3) + ')'},styleObject]"
      ></div>
      <div
        class="grid-item grid-item--width4 grid-item--height5"
        :style="[{ backgroundImage: 'url(' + getImage(4) + ')'},styleObject]"
      ></div>
      <div
        class="grid-item grid-item--width4 grid-item--height5"
        :style="[{ backgroundImage: 'url(' + getImage(5) + ')'},styleObject]"
      ></div>
      <div
        class="grid-item grid-item--width4 grid-item--height5"
        :style="[{ backgroundImage: 'url(' + getImage(6) + ')'},styleObject]"
      ></div>
    </div>
  </div>
</template>

<script>
// import weddingsQuery from '~/apollo/queries/portfolio/weddings.gql'
export default {
  data() {
    return {
    styleObject: {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    api_url: process.env.strapiBaseUri,
    weddings: [
      {
        "id": "1",
        "title": "With my love",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599507478/monet_malatino_wedding_thumb_ihm8nb_c63b0bc823.jpg"
        },
        "date": "2020-09-07T19:30:00.000Z"
      },
      {
        "id": "2",
        "title": "Ilya and Masha",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599507537/008_qigms0_e9d4gq_a58d7c6b2e.jpg"
        },
        "date": "2020-09-07T20:30:00.000Z"
      },
      {
        "id": "3",
        "title": "Love on the beach",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511241/Beach_Wedding_Crim_Barefoot_Beach_Bride_uapndf_70518984c8.jpg"
        },
        "date": "2020-09-07T20:30:00.000Z"
      },
      {
        "id": "4",
        "title": "Good memory",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511315/5_djhizt_0ba93f0786.jpg"
        },
        "date": "2020-09-07T20:30:00.000Z"
      },
      {
        "id": "5",
        "title": "Funny moment",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511396/e_t_wedding_523_oj0onq_8a3024d4d1.jpg"
        },
        "date": "2020-09-07T20:30:00.000Z"
      },
      {
        "id": "6",
        "title": "Finish her",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511467/5e2762f7ab49fd1ed25a9dc4_l7arm8_fb0d874aca.jpg"
        },
        "date": "2020-09-07T20:30:00.000Z"
      }
    ]
    }
  },
  // apollo: {
  //   weddings: {
  //     prefetch: true,
  //     query: weddingsQuery,
  //   },
  // },
  methods: {
    getImage(id) {
      for (const wedding in this.weddings) {
        let img = this.weddings.find((img) => img.id == id);
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
