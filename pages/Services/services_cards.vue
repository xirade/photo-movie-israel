<template>
  <mdb-container>
    <mdb-row class="pb-5">
      <mdb-col md="4" lg="3" class="my-auto">
        <mdb-card>
          <mdb-view hover>
              <img
                class="img-fluid"
                :src="getOrderImage"
                alt="Card image cap"
              />
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>{{getOrderTitle(1)}}</mdb-card-title>
            <span>{{getOrderPrice(1)}}₪/hr</span>
            <mdb-card-text>
              {{getOrderDescription(1)}}
            </mdb-card-text>
            <nuxt-link :to="'/order/photo'">
              <mdb-btn color="warning" class="ml-0">
                <mdb-icon icon="shopping-bag left" />Book now
              </mdb-btn>
            </nuxt-link>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="4" lg="5" class="my-5 mx-auto">
        <mdb-card>
          <mdb-view hover>
              <video :src="getOrderVideo" class="video-fluid z-depth-1" autoplay loop muted>
                <source
                  type="video/mp4"
                />
              </video>
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>{{getOrderTitle(2)}}</mdb-card-title>
            <span>{{getOrderPrice(2)}}₪/hr</span>
            <mdb-card-text>
              {{getOrderDescription(2)}}
            </mdb-card-text>
            <nuxt-link :to="'/order/video'">
              <mdb-btn class="ml-0" color="warning">
                <mdb-icon icon="shopping-bag left" />Book now
              </mdb-btn>
            </nuxt-link>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="4" lg="3" class="my-auto">
        <mdb-card>
          <mdb-view hover>
              <img
                class="img-fluid"
                :src="getOrderImage1"
                alt="Card image cap"
              />
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>{{getOrderTitle(3)}}</mdb-card-title>
            <span>{{getOrderPrice(3)}}₪/hr</span>
            <mdb-card-text>
              {{getOrderDescription(3)}}
            </mdb-card-text>
            <nuxt-link :to="'/order/montage'">
              <mdb-btn class="ml-0" color="warning">
                <mdb-icon icon="shopping-bag left" />Book now
              </mdb-btn>
            </nuxt-link>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import ordersQuery from "~/apollo/queries/order/orders.gql"
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon,
} from "mdbvue";
export default {
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      orders:[],
    }
  },
  apollo: {
    orders: {
      prefetch: true,
      query: ordersQuery,
    },
  },
  methods: {
    getOrderTitle(id) {
      let title = '';
       for (const order in this.orders) {
        title = this.orders.find((title) => title.id == id);
      }
        return title.title;
    },
    getOrderDescription(id) {
      let des = '';
       for (const order in this.orders) {
        des = this.orders.find((des) => des.id == id);
      }
        return des.description;
    },
    getOrderPrice(id) {
      let price = '';
       for (let order in this.orders) {
        price = this.orders.find((price) => price.id == id);
      }
        return price.price;
    }
  },
  computed: {
     getOrderVideo() {
       let video = [];
       for (let order = 1; order < this.orders.length - 1; order ++) {
        video.push(this.orders[order].video.url);
      }
        return video;
    },
     getOrderImage() {
      let img = [];
       for (let order = 0; order < this.orders.length - 2; order ++) {
         img.push(this.orders[order].image.url)
         }
        return img;
    },
     getOrderImage1() {
      let img1 = [];
       for (let order = 2; order < this.orders.length; order ++) {
         img1.push(this.orders[order].image.url)
         }
        return img1;
    },
  },
  //  mounted() {
  //   if (localStorage.getItem('reloaded')) {
  //     localStorage.removeItem('reloaded');
  //   } else {
  //     localStorage.setItem('reloaded', '0');
  //       location.reload();
  //   }
  // },
  name: "CardProPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
}
.card-title {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}
</style>