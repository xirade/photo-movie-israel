<template>
  <transition name="modal-fade">
    <mdb-container class="modal-z" v-if="items[index] != undefined">
      <mdb-modal
        @show="show"
        class="product-modal py-5"
        @close="close"
        size="lg"
        warning
      >
        <mdb-modal-body>
          <mdb-row>
            <mdb-col lg="5">
              <mdb-view>
                <v-lazy-image
                  class="img-fluid"
                  :srcset="items[index].modalimg.url+'?webp'"
                  :src="items[index].modalimg.url"
                  :alt="items[index].title"
                />
                <mdb-mask flex-center overlay="stylish-light"></mdb-mask>
              </mdb-view>
            </mdb-col>
            <mdb-col lg="7">
              <h2 class="h2-responsive title-card">
                <strong>{{ items[index].title }}</strong>
              </h2>
              <h4 class="pb-2 h4-responsive">
                <span class="green-text">
                  <strong>от {{ getListprice[val].price }}₪</strong>
                </span>
                <span class="grey-text">
                  <small>
                    <strong class="text-decoration"
                      ><s>{{ priceBefore }}₪</s></strong
                    >
                  </small>
                </span>
              </h4>
              <div class="accordion" role="tablist">
                <b-card
                  no-body
                  class="mb-1"
                  v-for="(listprice) in getListprice"
                  :key="listprice.id"
                >
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                      block
                      class="border-0"
                      v-b-toggle="getIdPrice(listprice.uid)"
                      :variant="listprice.color"
                      ><span class="h6-responsive">{{ listprice.name }}</span>
                      <span class="when-opened">
                        <mdb-icon
                          color="dark"
                          icon="chevron-up"
                          class="animate__animated animate__fadeInUp"
                        />
                      </span>
                      <span class="when-closed">
                        <mdb-icon
                          color="dark"
                          icon="chevron-down"
                          class="animate__animated animate__fadeInDown"
                        />
                      </span>
                    </b-button>
                  </b-card-header>
                  <b-collapse
                    :id="listprice.uid"
                    :visible="listprice.visible"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-row cols="1">
                        <b-col>
                          <div
                            v-if="listprice.description"
                            v-html="$md.render(listprice.description)"
                          ></div>
                        </b-col>
                        <b-col class="mt-3">
                          <mdb-btn
                            class="ml-0"
                            @click="getOrder(listprice)"
                            color="info"
                            icon="camera-retro"
                            iconClass="ml-2 white-text"
                            iconRight
                            >Order now</mdb-btn
                          >
                        </b-col>
                      </b-row>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
              <mdb-card-body>
                <div class="text-center">
                  <mdb-btn class="px-5" outline="danger" @click="close"
                    >Close</mdb-btn
                  >
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
import { mapMutations } from "vuex";
import VLazyImage from "v-lazy-image";
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
  mdbMask
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
    VLazyImage
  },
  data() {
    return {
      val: 0,
      currPrice: 0,
      error: null
    };
  },
  props: {
    index: Number,
    items: Array
  },
  methods: {
    getOrder(listprice) {
      this.removeOrder(listprice);
      this.removeExtra();
      this.$router.push({ name: "Checkout"});
    },
    show() {
      this.$emit("show");
    },
    close() {
      this.$emit("close");
    },
    getIdPrice(id) {
      this.$root.$on("bv::collapse::state", (collapseId, isJustShown) => {
        if (isJustShown == true && collapseId > 0) {
          this.val = collapseId - 1;
        } // index of element by id - 1
      });
      return id;
    },
    ...mapMutations({
      removeOrder: "order/remove",
      removeExtra: "cart/emptyList"
    })
  },
  computed: {
    // new arr
    getListprice() {
      let setListprice = [];
      for (let i = 0; i < this.items[this.index].listprices.length; i++) {
        setListprice.push(this.items[this.index].listprices[i]);
      }
      return setListprice;
    },
    priceBefore() {
      return parseInt(this.getListprice[this.val].price + 50 * (this.val + 1));
    }
  }
};
</script>

<style scoped>
h2 {
  font-family: "Oswald", sans-serif;
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}

.modal-z {
  position: fixed;
  z-index: 99999;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease-in;
}
</style>
