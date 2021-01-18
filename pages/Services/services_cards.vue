<template>
  <mdb-container>
    <mdb-row class="pb-5">
      <div v-if="error">{{ error }}</div>
      <mdb-col
        v-else
        v-for="(order,index) in orders"
        :key="order.id"
        lg="6"
        xl="4"
        class="my-3"
      >
        <mdb-card class="h-100">
          <mdb-view>
            <img
              class="img-fluid"
              :src="order.image.url"
              alt="Card image cap"
            />
            <mdb-mask flex-center overlay="stylish-light"></mdb-mask>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column">
            <mdb-card-title>{{ order.title }}</mdb-card-title>
            <span>от {{ order.price }}₪/{{ order.val }}</span>
            <mdb-card-text class="py-3">
              {{ order.description }}
            </mdb-card-text>
            <mdb-btn class="ml-0 mt-auto w-50" color="warning" @click="showModal(index)">
              <mdb-icon icon="shopping-bag left" />Подробнее
            </mdb-btn>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    <Modal :index="selectedIndex" :items="orders" v-show="isModalVisible" @close="closeModal"/>
    </mdb-row>
  </mdb-container>
</template>

<script>
import Modal from "~/components/modal.vue";
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
  data() {
    return {
      isModalVisible: false,
      selectedIndex: 0,
      error: null,
      api_url: process.env.strapiBaseUri,
      orders: [
        {
          id: "1",
          title: "Фотосъемка бизнес",
          description:
            "Портреты для блога и развития личного бренда, имиджевая фотосессия, предметная съемка.",
          fulldesc:
            "-Продумываю идею съемки -ретушь по необходимости -использование профессионального света, если требуется -фон хромакей при необходимости-обработка в течении 14 дней",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950739/3_haxune_jnd6g3_47450709a9.jpg",
          },
          price: 350,
          val: "hour",
        },
        {
          id: "2",
          title: "Фотосъемка бизнес(полный день)",
          description:
            "Для масштабных проектов, съемка одежды для каталога, съемка в большом количестве локаций.",
          fulldesc:
            "- Планирование маршрута и рекомендации по логистике и образу в разных локациях - подумываю идею съемки - съемка с квадрокоптера до 2 вылетов (по 20мин вылет), если есть разрешение на съемку в этом месте -  фон хромакей при работе в студии - количество фотографий до 200шт -  ретушь лучших до 50 фотографий -  выезд со своим освещением - черно-белые дубли всех обработанных фотографий, если требуется - обработка в течении 30 дней.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610481011/laura_fuhrman_73_OJ_Lcah_Q_Hg_unsplash_8aa7b40f23.jpg",
          },
          price: 1800,
          val: "day",
        },
        {
          id: "3",
          title: "Видеосъемка бизнес",
          description:
            "Короткий ролик до 1 мин. Съемка с монтажом. Видеовизитка, видеопост в соцсетях, рекламный ролик.",
          fulldesc:
            "- Придумываю идеи, - подбираю локации, - составляю сценарии и раскадровки,- добавляю визуальные эффекты.- инфографика оговаривается.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598630660/nevesta_f7f7930fb0.jpg",
          },
          price: 800,
          val: "hour",
        },
        {
          id: "4",
          title: "Видеосъемка бизнес(полный день)",
          description:
            "Упаковка учебных видеоматериалов,  музыкальные видео, корпоративные ролики и фильмы, контент для блогеров, ролики для  TV и YouTube.",
          fulldesc:
            "- целый день работы видеооператора - квадрокоптер - отсматриваю готовый материал,  - склеиваю, - делаю цветокоррекцию, - подбираю музыку и озвучку - добавляю титры и визуальные эффекты.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610486513/kal_visuals_w_Lu_Crqc_N3p_E_unsplash_67a4b42a50.jpg",
          },
          price: 1800,
          val: "day",
        },
        {
          id: "5",
          title: "Фотосъемка семья",
          description:
            "Выезд в пределах Иерусалима. Семейная фотосессия, съемка ребёнка,  ньюборн, индивидуальная фотосессия, съемка в студии.",
          fulldesc:
            "- Продумываю идею съемки - количество фотографий обсуждается в зависимости от постановки задачи -  ретушь по необходимости -  использование профессионального света, если требуется -  дигитальный фотоальбом при необходимости -  наличие подарочного сертификата - обработка в течении 14 дней",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610487587/kal_visuals_4k_Sk_V_Xlz_O1c_unsplash_599f4db875.jpg",
          },
          price: 350,
          val: "hour",
        },
        {
          id: "6",
          title: "Видеосъемка семья",
          description:
            "Видеосъемка семейных торжеств и мероприятий, юбилея, бритмила, бармицва, фильмы для детского сада, лав-стори, свадьба.",
          fulldesc:
            "- до 6 часов работы видеооператора - квадрокоптер - отсматриваю готовый материал, - склеиваю, - делаю цветокоррекцию, - подбираю музыку и озвучку - добавляю титры и визуальные эффекты",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610487988/kendra_allen_k8_F_So_WA_Ozb4_unsplash_e62df272b3.jpg",
          },
          price: 1800,
          val: "day",
        },
      ],
    };
  },

  methods: {
    showModal(index){
      this.selectedIndex = index;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
      this.orders = await this.orders.find();
    } catch (error) {
      this.error = error;
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
    Modal,
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