<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div
        v-for="family in families"
        :key="family.id"
        :class="
          'grid-item ' +
          `grid-item--width${family.width} ` +
          'grid-item--height5'
        "
      >
        <v-lazy-image
          class="grid-img z-depth-1-half"
          :src="family.image.url"
          :alt="family.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
// import weddingsQuery from '~/apollo/queries/portfolio/weddings.gql'
export default {
  data() {
    return {
      styleObject: {
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      api_url: process.env.strapiBaseUri,
      families: [
        {
          id: "1",
          title: "Little girl",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950572/0013_rg5rks_ddi1rd_73cee6bec5.jpg",
          },
          date: "2020-09-07T13:50:00.000Z",
          width: 3,
        },
        {
          id: "2",
          title: "Family beach",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599486970/family_beach_l9tgah_ff11312680.jpg",
          },
          date: "2020-09-07T14:00:00.000Z",
          width: 2,
          height: 5,
        },
        {
          id: "3",
          title: "My big family",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487034/poster_df0c03dca9cd4ed49daa4ddb71536fc6_pt4jlv_30c5b2c6e3.jpg",
          },
          date: "2020-09-07T14:00:00.000Z",
          width: 4,
          height: 5,
        },
        {
          id: "4",
          title: "My first steps",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487113/bring_your_family_to_germany_kyntov_180cd0552f.jpg",
          },
          date: "2020-09-07T14:00:00.000Z",
          width: 4,
        },
        {
          id: "5",
          title: "Travelling together",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487200/large_multi_gen_travel_1280x640_c791jr_f0bc8b0e31.jpg",
          },
          date: "2020-09-07T14:00:00.000Z",
          width: 4,
        },
        {
          id: "6",
          title: "Good weekend",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487261/happy_family_rmnzrm_9f3f2241d4.jpg",
          },
          date: "2020-09-07T15:00:00.000Z",
          width: 4,
        },
      ],
    };
  },
  components: {
    VLazyImage
  },
  // apollo: {
  //   weddings: {
  //     prefetch: true,
  //     query: weddingsQuery,
  //   },
  // },
  async mount() {
    try {
      this.families = await this.families.find();
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
