<template>
  <div>
    <Alert v-if="isAlertVisible" @show="isAlertVisible" @close="closeAlert" />
    <div v-if="$store.state.order.items.name"></div>
    <mdb-card
      v-else
      :class="{ 'cardroom--unpinned': scrolled }"
      class="cardroom cardroom--pinned"
      style="z-index: 1"
      v-on:scroll="handleScroll"
    >
      <mdb-card-body
        v-for="(order, index) in $store.state.order.items"
        :key="index"
      >
        <mdb-card-title class="order-title mt-2">
          {{ order.name }}
        </mdb-card-title>
        <span>Price:</span>
        <input class="ml-2 d-none" type="text" v-model="order.price" />
        {{ order.price }}₪
        <hr />
        <mdb-card-text
          >Some quick example text to build on the card title and make up the
          bulk of the card's content.</mdb-card-text
        >
        <div>
          <mdb-row>
            <mdb-col>
              <ToggleButton
                id="switcher_one"
                v-on:change="triggerToggleEvent"
              />
            </mdb-col>
            <mdb-col>
              text
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col>
              <ToggleButton
                id="switcher_two"
                v-on:change="triggerToggleEvent"
              />
            </mdb-col>
            <mdb-col>
              text
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col>
              <ToggleButton
                id="switcher_three"
                v-on:change="triggerToggleEvent"
              />
            </mdb-col>
            <mdb-col>
              text
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col>
              <ToggleButton
                id="switcher_four"
                v-on:change="triggerToggleEvent"
              />
            </mdb-col>
            <mdb-col>
              text
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col>
              <ToggleButton
                id="switcher_five"
                v-on:change="triggerToggleEvent"
              />
            </mdb-col>
            <mdb-col>
              text
            </mdb-col>
          </mdb-row>
        </div>
        <mdb-btn
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
import ToggleButton from "~/components/toggleButton.vue";
import {
  mdbCol,
  mdbRow,
  mdbCard,
  mdbCardBody,
  mdbBtn,
  mdbCardText,
  mdbCardTitle
} from "mdbvue";
export default {
  name: "Summary",
  components: {
    mdbCol,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbCardText,
    mdbCardTitle,
    ToggleButton
  },
  data() {
    return {
      isActive: false,
      orders: null,
      limitPosition: 350,
      scrolled: false,
      error: null,
      lastPosition: 0,
      isAlertVisible: false
    };
  },
  async mounted() {
    try {
      this.orders = await this.$store.state.order.items;
    } catch (error) {
      return (this.error = this.$nuxt.error({
        statusCode: 500,
        message: "error message"
      }));
    }
  },
  methods: {
    triggerToggleEvent(value) {
      this.isActive = value;
    },
    showAlert(event) {
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
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
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
input[type="number"] {
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
}</style
>>
