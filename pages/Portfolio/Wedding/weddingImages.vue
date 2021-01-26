<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div
        v-for="wedding in weddings"
        :key="wedding.id"
        :class="
          'grid-item ' +
          `grid-item--width${wedding.width} ` +
          'grid-item--height5'
        "
      >
        <img class="grid-img z-depth-1-half" :src="wedding.image.url" :alt="wedding.title" />
      </div>
    </div>
  </div>
</template>

<script>
// import weddingsQuery from '~/apollo/queries/portfolio/weddings.gql'
export default {
  data() {
    return {
      styleObject: {
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      api_url: process.env.strapiBaseUri,
      weddings: [
        {
          id: "1",
          title: "With my love",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599507478/monet_malatino_wedding_thumb_ihm8nb_c63b0bc823.jpg",
          },
          date: "2020-09-07T19:30:00.000Z",
          width: 3,
        },
        {
          id: "2",
          title: "Ilya and Masha",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599507537/008_qigms0_e9d4gq_a58d7c6b2e.jpg",
          },
          date: "2020-09-07T20:30:00.000Z",
          width: 2,
          height: 5,
        },
        {
          id: "3",
          title: "Love on the beach",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511241/Beach_Wedding_Crim_Barefoot_Beach_Bride_uapndf_70518984c8.jpg",
          },
          date: "2020-09-07T20:30:00.000Z",
          width: 4,
          height: 5,
        },
        {
          id: "4",
          title: "Good memory",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511315/5_djhizt_0ba93f0786.jpg",
          },
          date: "2020-09-07T20:30:00.000Z",
          width: 4,
        },
        {
          id: "5",
          title: "Funny moment",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511396/e_t_wedding_523_oj0onq_8a3024d4d1.jpg",
          },
          date: "2020-09-07T20:30:00.000Z",
          width: 4,
        },
        {
          id: "6",
          title: "Finish her",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599511467/5e2762f7ab49fd1ed25a9dc4_l7arm8_fb0d874aca.jpg",
          },
          date: "2020-09-07T20:30:00.000Z",
          width: 4,
        },
      ],
    };
  },
  // apollo: {
  //   weddings: {
  //     prefetch: true,
  //     query: weddingsQuery,
  //   },
  // },
  async mount() {
    try {
      this.weddings = await this.weddings.find();
    } catch (error) {
      this.error = error;
    }
  },
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
  border: 10px solid #343a40;
}

.grid-item img {
  object-fit: cover;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: 'object-fit: cover;';
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
