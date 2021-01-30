<template>
  <div class="container">
    <div class="grid">
      <div class="grid-sizer"></div>
      <div
        v-for="street in streets"
        :key="street.id"
        :class="
          'grid-item ' +
            `grid-item--width${street.width} ` +
            'grid-item--height5'
        "
      >
        <v-lazy-image
          :srcset="street.image.url + '?webp'"
          :src-placeholder="require('~/assets/img/loading.svg')"
          class="grid-img z-depth-1-half"
          :src="street.image.url"
          :alt="street.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
// import streetsQuery from '~/apollo/queries/portfolio/streets.gql';
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      streets: [
        {
          id: "1",
          title: "Magic view",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599454574/2_vzvvds_c81a39020c.jpg"
          },
          date: "2020-09-07T05:00:00.000Z",
          width: 3
        },
        {
          id: "2",
          title: "Amazing sea",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599454713/0026_nfvrt1_1efd97413d.jpg"
          },
          date: "2020-09-07T05:00:00.000Z",
          width: 2,
          height: 5
        },
        {
          id: "3",
          title: "Great beach",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485274/3612581_18010316150060733791_vsk8xn_9a40cfcc9b.jpg"
          },
          date: "2020-09-07T13:30:00.000Z",
          width: 4,
          height: 5
        },
        {
          id: "4",
          title: "Red water",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485347/whats_for_sale_with_a_view_show_hero_rphdyd_78bffbf729.jpg"
          },
          date: "2020-09-07T13:30:00.000Z",
          width: 4
        },
        {
          id: "5",
          title: "Blue sky",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485406/116281457_gu2tze_31d7246927.jpg"
          },
          date: "2020-09-07T13:30:00.000Z",
          width: 4
        },
        {
          id: "6",
          title: "Wonderful sunset",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599485491/241074099_dqe7q4_50121a0704.jpg"
          },
          date: "2020-09-07T13:30:00.000Z",
          width: 4
        }
      ]
    };
  },
  components: {
    VLazyImage
  },
  //   apollo: {
  //   streets: {
  //     prefetch: true,
  //     query: streetsQuery,
  //   },
  // },
  async mount() {
    try {
      this.weddings = await this.weddings.find();
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-lazy-image {
  transition: filter 0.7s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

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
