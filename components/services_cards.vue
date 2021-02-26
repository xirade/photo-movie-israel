<template>
  <mdb-container>
    <mdb-row class="pb-5">
      <mdb-card-group class="my-3">
        <div v-if="error">{{ error }}</div>
        <mdb-col
          lg="6"
          class="p-3"
          v-else
          v-for="(order, index) in orders"
          :key="order.id"
        >
          <mdb-card class="card-image border border-dark">
            <mdb-view>
              <v-lazy-image
                class="img-fluid w-100"
                :src-placeholder="require('~/assets/img/back-pattern.png')"
                type="image/webp"
                :srcset="order.image.url+'?webp'"
                :src="order.image.url"
                :alt="order.title"
              >
              </v-lazy-image>
              <mdb-mask flex-center overlay="white-slight"></mdb-mask>
            </mdb-view>
            <mdb-card-body
              color="elegant"
              class="d-flex flex-column text-white"
            >
              <mdb-card-title style="color: #e3deca">{{
                order.title
              }}</mdb-card-title>
              <span class="blue-grey-text">от {{ order.price }}₪</span>
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
    </mdb-row>
    <Modal
      v-if="isModalVisible"
      :index="selectedIndex"
      :items="orders"
      v-show="isModalVisible"
      @close="closeModal"
    />
  </mdb-container>
</template>

<script>
import VLazyImage from "v-lazy-image";
import Modal from "~/components/modal.vue";
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
  mdbIcon
} from "mdbvue";
export default {
  data() {
    return {
      isModalVisible: false,
      selectedIndex: 0,
      error: null
    };
  },
  props: {
    orders: Array
  },
  methods: {
    showModal(index) {
      this.selectedIndex = index;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
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
    VLazyImage
  }
};
</script>

<style lang="scss" scoped>
.card-title {
  font-family: "Oswald", sans-serif;
}
</style>
