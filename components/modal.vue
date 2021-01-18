<template>
  <transition name="modal-fade">
    <mdb-container>
      <mdb-modal
        @show="show"
        class="product-modal py-5"
        @close="close"
        size="lg"
        info
      >
        <mdb-modal-body>
          <mdb-row>
            <mdb-col lg="5">
              <mdb-view>
                <img
                  class="img-fluid"
                  :src="items[index].image.url"
                  alt="Card image cap"
                />
                <mdb-mask flex-center overlay="stylish-light"></mdb-mask>
              </mdb-view>
            </mdb-col>
            <mdb-col lg="7">
              <h2 class="h2-responsive product-name">
                <strong>Product Name</strong>
              </h2>
              <h4 class="h4-responsive">
                <span class="green-text">
                  <strong>$49</strong>
                </span>
                <span class="grey-text">
                  <small>
                    <strong>$89</strong>
                  </small>
                </span>
              </h4>
              <p>{{ items[index].fulldesc }}</p>
              <mdb-card-body>
                <div class="text-center">
                  <mdb-btn color="secondary" @click="close">Close</mdb-btn>
                  <nuxt-link :to="{path: '/order/photo'}">
                    <mdb-btn
                    color="primary"
                    icon="cart-plus"
                    iconClass="ml-2 white-text"
                    iconRight
                    >Add to cart</mdb-btn
                  >
                  </nuxt-link>
                </div>
              </mdb-card-body>
            </mdb-col>
          </mdb-row>
        </mdb-modal-body>
      </mdb-modal>
    </mdb-container>
  </transition>
</template>

<script>
import {
  mdbRow,
  mdbContainer,
  mdbCol,
  mdbBtn,
  mdbIcon,
  mdbModalBody,
  mdbCardBody,
  mdbModal,
  mdbView,
  mdbMask,
} from "mdbvue";
export default {
  name: "modal",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbModalBody,
    mdbCardBody,
    mdbModal,
    mdbView,
    mdbMask,
  },
  data() {
    return {
      error: null,
    };
  },
  props: ["index", "items"],
  methods: {
    show() {
      this.$emit("show");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>


<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>