<template>
  <mdb-container>
    <mdb-row class="pb-5">
      <div v-if="error">{{error}}</div>
      <mdb-col v-else v-for="order in orders" :key="order.id" md="6" lg="4" class="my-3">
        <mdb-card class="h-100">
          <mdb-view hover>
              <img
                class="img-fluid"
                :src="order.image.url"
                alt="Card image cap"
              />
              <mdb-mask flex-center waves overlay="black-light"></mdb-mask>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>{{order.title}}</mdb-card-title>
            <span>{{order.price}}₪/{{order.val}}</span>
            <mdb-card-text>
              {{order.description}}
            </mdb-card-text>
            <nuxt-link :to="'/order/montage'">
              <mdb-btn class="ml-0" color="warning">
                <mdb-icon icon="shopping-bag left" />Подробнее
              </mdb-btn>
            </nuxt-link>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
// import ordersQuery from "~/apollo/queries/order/orders.gql"
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
      orders:[
      {
        "id": "1",
        "title": "Фотосъемка",
        "description": "Портреты для блога и развития личного бренда, имиджевая фотосессия, предметная съемка.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950739/3_haxune_jnd6g3_47450709a9.jpg"
        },
        "price": 350,
        "val": "hour"
      },
      {
        "id": "2",
        "title": "Фотосъемка(полный день)",
        "description": "Для масштабных проектов, съемка одежды для каталога, съемка в большом количестве локаций.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610481011/laura_fuhrman_73_OJ_Lcah_Q_Hg_unsplash_8aa7b40f23.jpg"
        },
        "price": 1800,
        "val": "day"
      },
      {
        "id": "3",
        "title": "Видеосъемка",
        "description": "Короткий ролик до 1 мин. Съемка с монтажом. Видеовизитка, видеопост в соцсетях, рекламный ролик.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598630660/nevesta_f7f7930fb0.jpg"
        },
        "price": 800,
        "val": "hour"
      },
      {
        "id": "4",
        "title": "Видеосъемка(полный день)",
        "description": "Упаковка учебных видеоматериалов,  музыкальные видео, корпоративные ролики и фильмы, контент для блогеров, ролики для  TV и YouTube.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610486513/kal_visuals_w_Lu_Crqc_N3p_E_unsplash_67a4b42a50.jpg"
        },
        "price": 1800,
        "val": "day"
      },
      {
        "id": "5",
        "title": "Фотосъемка",
        "description": "Выезд в пределах Иерусалима. Семейная фотосессия, съемка ребёнка,  ньюборн, индивидуальная фотосессия, съемка в студии.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610487587/kal_visuals_4k_Sk_V_Xlz_O1c_unsplash_599f4db875.jpg"
        },
        "price": 350,
        "val": "hour"
      },
      {
        "id": "6",
        "title": "Видеосъемка",
        "description": "Видеосъемка семейных торжеств и мероприятий, юбилея, бритмила, бармицва, фильмы для детского сада, лав-стори, свадьба.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610487988/kendra_allen_k8_F_So_WA_Ozb4_unsplash_e62df272b3.jpg"
        },
        "price": 1800,
        "val": "day"
      }
    ],
    }
  },
  // apollo: {
  //   orders: {
  //     prefetch: true,
  //     query: ordersQuery,
  //   },
  // },
  async mount() {
       try {
      this.orders = await this.orders.find()
    } catch (error) {
      this.error = error
    }
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