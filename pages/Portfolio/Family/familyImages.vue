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
// import familiesQuery from '~/apollo/queries/portfolio/families.gql';
export default {
    data() {
        return {
            api_url: process.env.strapiBaseUri,
            families: [
      {
        "id": "1",
        "title": "Little girl",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950572/0013_rg5rks_ddi1rd_73cee6bec5.jpg"
        },
        "date": "2020-09-07T13:50:00.000Z"
      },
      {
        "id": "2",
        "title": "Family beach",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599486970/family_beach_l9tgah_ff11312680.jpg"
        },
        "date": "2020-09-07T14:00:00.000Z"
      },
      {
        "id": "3",
        "title": "My big family",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487034/poster_df0c03dca9cd4ed49daa4ddb71536fc6_pt4jlv_30c5b2c6e3.jpg"
        },
        "date": "2020-09-07T14:00:00.000Z"
      },
      {
        "id": "4",
        "title": "My first steps",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487113/bring_your_family_to_germany_kyntov_180cd0552f.jpg"
        },
        "date": "2020-09-07T14:00:00.000Z"
      },
      {
        "id": "5",
        "title": "Travelling together",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487200/large_multi_gen_travel_1280x640_c791jr_f0bc8b0e31.jpg"
        },
        "date": "2020-09-07T14:00:00.000Z"
      },
      {
        "id": "6",
        "title": "Good weekend",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1599487261/happy_family_rmnzrm_9f3f2241d4.jpg"
        },
        "date": "2020-09-07T15:00:00.000Z"
      }
    ]
        }
    },
  //   apollo: {
  //   families: {
  //     prefetch: true,
  //     query: familiesQuery,
  //   },
  // },
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
