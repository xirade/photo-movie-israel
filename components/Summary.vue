<template>
  <div>
    <Alert v-if="isAlertVisible" v-show="isAlertVisible" @close="closeAlert" />
    <mdb-card
      :class="{ 'cardroom--unpinned': scrolled }"
      class="cardroom cardroom--pinned"
      style="z-index: 1"
      v-on:scroll="handleScroll"
    >
      <mdb-card-body>
        <mdb-card-title class="order-title mt-2">{{
          order[0].title
        }}</mdb-card-title>
        <div class="mb-3 d-flex align-items-center">
          Amount:
          <button class="btn p-1" @click="stepDown" type="button">
            <i class="fas fa-minus"></i>
          </button>
          <input
            class="ml-2 pt-2"
            type="number"
            :step="1"
            id="counter"
            name="counter"
            style="width: 2.2rem"
            required
            v-model="time"
            readOnly
          />
          <button class="btn p-1" @click="stepUp" type="button">
            <i class="fas fa-plus"></i>
          </button>
          hr
        </div>
        <span>Price:</span>
        <input
          class="ml-2 d-none"
          type="text"
          :value="getTotalPrice"
        />
        {{ getTotalPrice }}₪
        <hr />
        <mdb-card-text
          >Some quick example text to build on the card title and make up the
          bulk of the card's content.</mdb-card-text
        >
        <!-- TODO disabled if form not fullfill -->
        <mdb-btn
          :disabled="!time"
          @click="showAlert"
          id="check_validate"
          class="px-5"
          block
          color="warning"
          >Next</mdb-btn
        >
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import {
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbCardText,
  mdbCardTitle,
} from "mdbvue";
export default {
  name: "Summary",
  components: {
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbCardText,
    mdbCardTitle,
  },
  props: {
    order: Array,
  },
  data() {
    return {
      limitPosition: 350,
      scrolled: false,
      lastPosition: 0,
      time: 1,
      totalPrice: 0,
      isAlertVisible: false,
    };
  },
  computed: {
    getTotalPrice() {
      let price = this.totalPrice;
      return (price += this.order[0].price * this.time);
    },
  },
  methods: {
    showAlert() {
      this.isAlertVisible = true;
    },
    closeAlert() {
      this.isAlertVisible = false;
    },
    stepUp() {
      if (this.time < 10) {
        document.querySelector("input[type=number]").stepUp();
        this.time++;
      }
    },
    stepDown() {
      if (this.time > 1) {
        document.querySelector("input[type=number]").stepDown();
        this.time--;
      }
    },
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
        // move down
      }

      this.lastPosition = window.scrollY;
      this.scrolled = window.scrollY > 350;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.css";

h4 {
  font-family: "Oswald", sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  border: none;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
  border: none;
}

.card {
  background-color: #fff;
}
.cardroom {
  position: fixed;
  will-change: transform;
  transition: transform 0.2s ease-in-out;
}
.cardroom--pinned {
  transform: translateY(-50%);
}
.cardroom--unpinned {
  transform: translateY(-90%);
}

@media (max-width: 767px) {
  .cardroom {
    position: relative;
  }
  .cardroom--pinned {
    transform: translateY(0%);
  }
  .cardroom--unpinned {
    transform: translateY(0%);
  }
}
</style>>
