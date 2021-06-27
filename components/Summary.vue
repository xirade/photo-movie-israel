<template>
  <div>
    <mdb-card
      :class="{ 'cardroom--unpinned': scrolled }"
      class="cardroom cardroom--pinned z-depth-3"
      style="z-index: 1"
      v-on:scroll="handleScroll"
    >
      <mdb-card-body v-for="item in items" :key="item.id">
        <mdb-card-title class="order-title mt-2">
          {{ item.name }}
        </mdb-card-title>
        <span>Total:</span>
        <span class="font-weight-bold">{{ item.price + getTotalPrice }}₪</span>
        <extra-small v-if="item.category != 'null'" />
        <div class="table">
          <extra-table v-if="item.category != 'null'" />
        </div>
        <mdb-btn @click="showAlert" id="check_validate" block color="warning"
          >Next</mdb-btn
        >
      </mdb-card-body>
    </mdb-card>
    <Alert v-if="isAlertVisible" @show="isAlertVisible" @close="closeAlert" />
  </div>
</template>

<script>
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
  },

  data() {
    return {
      isActive: false,
      limitPosition: 350,
      scrolled: false,
      error: null,
      lastPosition: 0,
      isAlertVisible: false
    };
  },
  props: ["items"],
  methods: {
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
      this.scrolled = window.scrollY > 200;
    }
  },
  computed: {
    getTotalPrice() {
      return this.$store.getters["cart/price"];
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
.table {
  overflow: auto;
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
  width: 45%;
  position: fixed;
  will-change: transform;
  transition: transform 0.2s ease-in-out;
}
.cardroom--pinned {
  transform: translateY(0%);
}
.cardroom--unpinned {
  transform: translateY(-50%);
}

@media (max-width: 992px) {
  .cardroom {
    width: 100%;
    position: relative;
  }
  .cardroom--pinned {
    transform: translateY(0%);
  }
  .cardroom--unpinned {
    transform: translateY(0%);
  }
}
</style>
