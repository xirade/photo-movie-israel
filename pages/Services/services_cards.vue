<template>
  <mdb-container>
    <mdb-row class="pb-5">
      <mdb-card-group class="my-3">
        <div v-if="error">{{ error }}</div>
        <mdb-col
          lg="6"
          class="my-3"
          v-else
          v-for="(order, index) in orders"
          :key="order.id"
        >
          <mdb-card class="card-image h-100 border border-dark">
            <mdb-view>
              <img
                class="img-fluid w-100"
                :src="order.image.url"
                alt="Card image cap"
              />
              <mdb-mask flex-center overlay="white-slight"></mdb-mask>
            </mdb-view>
            <mdb-card-body
              color="elegant"
              class="d-flex flex-column text-white"
            >
              <mdb-card-title style="color: #e3deca">{{
                order.title
              }}</mdb-card-title>
              <span class="blue-grey-text"
                >от {{ order.price }}₪/{{ order.val }}</span
              >
              <mdb-card-text class="text-white py-3">
                {{ order.description }}
              </mdb-card-text>
              <mdb-btn
                class="mt-auto"
                outline="light"
                @click="showModal(index)"
              >
                <mdb-icon icon="shopping-bag left" />Подробнее
              </mdb-btn>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-card-group>
      <Modal
        v-if="isModalVisible"
        :index="selectedIndex"
        :items="orders"
        v-show="isModalVisible"
        @close="closeModal"
      />
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
          listprice: [
            {
              id: "1",
              name: "Light",
              color: "gray",
              price: 350,
              description:
                "- Длительность съемки до 1 часа <br>- От 30 обработанных фотографий со съемки + остальные удачные кадры в цветокоррекции <br>- Обработка до 14 дней <br>- Каждые дополнительные полчаса +150 шек",
              visible: true,
            },
            {
              id: "2",
              name: "Standard",
              color: "light",
              price: 800,
              description:
                "- Подумываю идею съемки <br>- Длительность съемки до 2,5 часов <br>- От 60 обработанных фотографий + остальные удачные кадры в цветокоррекции <br>- Около 10 фотографий в ретуши (на мой или ваш выбор) <br>- использование профессионального света <br>- фон хромакей, при необходимости <br>- Обработка в течение 14 дней <br>- Каждые дополнительные полчаса +150 шек",
              visible: null,
            },
            {
              id: "3",
              name: "All day(полный день)",
              color: "warning",
              price: 1800,
              description:
                "- Планирование маршрута и рекомендации по логистике и образу в разных локациях <br>- Продумываю идею съемки <br>- Съемка с квадрокоптера до 2 вылетов (по 20мин вылет), если есть разрешение на съемку в этом месте <br>- Фон хромакей при работе в студии <br>- Количество фотографий до 200шт <br>- Петушь лучших до 50 фотографий <br>- Выезд со своим освещением <br>- Черно-белые дубли всех обработанных фотографий, если требуется <br>- Обработка в течении 30 дней.",
              visible: null,
            },
          ],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950739/3_haxune_jnd6g3_47450709a9.jpg",
          },
          price: 350,
          val: "hour",
        },
        {
          id: "2",
          title: "Видеосъемка бизнес",
          description:
            "Короткий ролик до 1 мин. Съемка с монтажом. Видеовизитка, рекламный ролик, контент для блогеров.",
          listprice: [
            {
              id: "1",
              name: "Single order (разовый заказ)",
              color: "gray",
              price: 1500,
              description:
                "- Ролик до 1мин. <br>- Придумываю идеи <br>- Подбираю локации <br>- составляю сценарии и раскадровки <br>- добавляю визуальные эффекты <br>- инфографика",
              visible: true,
            },
            {
              id: "2",
              name: "All day (полный день)",
              color: "light",
              price: 1800,
              description:
                "- Целый день работы видеооператора <br>- квадрокоптер <br>- отсматриваю готовый материал,  <br>- склеиваю, <br>- делаю цветокоррекцию, <br>- подбираю музыку и озвучку <br>- добавляю титры и визуальные эффекты.",
              visible: null,
            },
            {
              id: "3",
              name: "Multiple orders (оптовый заказ)",
              color: "warning",
              price: 4000,
              description:
                "- Ролик до 1мин. <br>- Придумываю идеи <br>- Подбираю локации <br>- составляю сценарии и раскадровки <br>- добавляю визуальные эффекты <br>- инфографика",
              visible: null,
            },
          ],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598630660/nevesta_f7f7930fb0.jpg",
          },
          price: 800,
          val: "hour",
        },
        {
          id: "3",
          title: "Фотосъемка семья",
          description:
            "Выезд в пределах Иерусалима. Семейная фотосессия, съемка ребёнка,  ньюборн, индивидуальная фотосессия, съемка в студии.",
          listprice: [
            {
              id: "1",
              name: "Light",
              color: "gray",
              price: 350,
              description:
                "- Длительность съемки до 1 часа <br>- От 30 обработанных фотографий со съемки + остальные удачные кадры в цветокоррекции <br>- Обработка до 14 дней <br>- Каждые дополнительные полчаса +150 шек",
              visible: true,
            },
            {
              id: "2",
              name: "Standard",
              color: "light",
              price: 800,
              description:
                "- Подумываю идею съемки <br>- Длительность съемки до 2,5 часов <br>- От 60 обработанных фотографий + остальные удачные кадры в цветокоррекции <br>- Около 10 фотографий в ретуши (на мой или ваш выбор) <br>- использование профессионального света <br>- фон хромакей, при необходимости <br>- Обработка в течение 14 дней <br>- Каждые дополнительные полчаса +150 шек",
              visible: null,
            },
          ],
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1610487587/kal_visuals_4k_Sk_V_Xlz_O1c_unsplash_599f4db875.jpg",
          },
          price: 350,
          val: "hour",
        },
        {
          id: "4",
          title: "Видеосъемка семья",
          description:
            "Видеосъемка семейных торжеств и мероприятий, юбилея, бритмила, бармицва, фильмы для детского сада, лав-стори, свадьба.",
          listprice: [
            {
              id: "1",
              name: "Standard",
              color: "light",
              price: 1800,
              description:
                "- до 6 часов работы видеооператора <br>- квадрокоптер <br>- отсматриваю готовый материал,  <br>- склеиваю, <br>- делаю цветокоррекцию, <br>- подбираю музыку и озвучку <br>- добавляю титры и визуальные эффекты",
              visible: true,
            },
          ],
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
    showModal(index) {
      this.selectedIndex = index;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
.card-title {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}
</style>