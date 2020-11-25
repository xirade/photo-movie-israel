<template>
  <div>
    <form name="form1" action="montage/book" method="post">
      <mdb-container class="my-5">
        <span>
          <router-link
            class="h4 text-uppercase text-warning"
            style="text-decoration: none"
            tag="a"
            :to="'/services'"
          >
            <mdb-icon class="mr-2" icon="angle-left" />Back
          </router-link>
        </span>
        <div class="text-left mt-5">
          <h3 class="h2 pt-2">Service Order Form</h3>
          <p class="service-text mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            est ipsam a nesciunt. Sint at laboriosam incidunt tenetur odit quis
            impedit hic vitae cupiditate aperiam!
          </p>
        </div>
        <br class="p-2" />
        <mdb-row>
          <mdb-col md="7" class="h-75">
            <mdb-icon class="mr-2" size="2x" icon="user" />
            <label for="name">Full name *</label>
            <input
              maxlength="32"
              v-model="name"
              @keypress="isLetter($event)"
              id="name"
              class="mb-5 datePicker"
              required
            />
            <br />
            <mdb-icon class="mr-2" size="2x" icon="envelope" />
            <label for="email">Email *</label>
            <input
              v-model="email"
              class="mb-5 datePicker"
              type="email"
              @input="isEmail"
              id="email"
              name="email"
              required
            />
            <br />
            <mdb-icon class="mr-2" size="2x" icon="phone" />
            <label for="phone">Phone *</label>
            <input
              class="mb-5 datePicker"
              type="tel"
              @input="isNumber"
              id="phone"
              name="phone"
              maxlength="10"
              required
            />
            <mdb-icon class="mr-2" size="2x" icon="calendar" />
            <label class="mb-3" for="date">Date *</label>
            <div class="d-flex flex-row mb-5">
              <VueCtkDateTimePicker
                v-model="value"
                :first-day-of-week="7"
                format="YYYY-MM-DD HH:mm:ss"
                :disabled-weekly="[5, 6]"
                :disabled-hours="[
                  '00',
                  '01',
                  '02',
                  '03',
                  '04',
                  '05',
                  '06',
                  '07',
                  '08',
                  '22',
                  '23',
                ]"
                minute-interval="10"
                button-color="blue"
                color="gray"
                :right="true"
                label="Date"
              >
                <input
                  class="datePicker"
                  id="date"
                  name="date"
                  placeholder="Please enter your date here"
                  required
                />
              </VueCtkDateTimePicker>
            </div>
            <p style="color: gray">* Required info</p>
          </mdb-col>
          <mdb-col md="5">
            <mdb-card
              :class="{ 'cardroom--unpinned': scrolled }"
              class="cardroom cardroom--pinned"
              style="z-index: 1"
              v-on:scroll="handleScroll"
            >
              <mdb-card-body>
                <mdb-card-title class="mt-2">{{
                  getOrderTitle(3)
                }}</mdb-card-title>
                <div class="d-flex align-items-center">
                  Amount:
                 <button
            class="btn p-1"
            @click="stepDown"
            type="button"
            >
      <i class="fas fa-minus"></i>
    </button>
                  <mdb-input
                    class="ml-2 pt-2"
                    type="number"
                    :step="1"
                    :min="0"
                    :max="10"
                    id="hourValue"
                    name="hourValue"
                    style="width: 2.2rem"
                    required
                    v-model.number="hours"
                    placeholder="0"
                    ref="hour_input"
                    pattern="[0-9]{1,2}"
                    readOnly
                  />
                   <button
            class="btn p-1"
            @click="stepUp"
            type="button"
            >
      <i class="fas fa-plus"></i>
    </button>
                  hr
                </div>
                <span>Price:</span>
                <input
                  class="ml-2 d-none"
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  :value="total"
                />
                {{ totalPrice }}₪
                <hr />
                <mdb-card-text
                  >Some quick example text to build on the card title and make
                  up the bulk of the card's content.</mdb-card-text
                >
                <mdb-btn
                  :disabled="!hours"
                  @click="getHoursValue()"
                  id="next"
                  class="px-5"
                  block
                  color="warning"
                  >Next</mdb-btn
                >
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <hr class="p-2 mt-5" />
        <div class="text-center">
          <mdb-icon class="mx-3" icon="camera" />
          <mdb-icon class="mx-3" icon="video" />
          <mdb-icon class="mx-3" icon="crop" />
          <mdb-icon class="mx-3" icon="film" />
          <mdb-icon class="mx-3" fab icon="adobe" />
        </div>
      </mdb-container>
      <div>
        <mdb-modal :show="show" @show="handleShow" @close="show = false" danger>
          <mdb-modal-header>
            <mdb-modal-title>Please check your entries!</mdb-modal-title>
          </mdb-modal-header>
          <mdb-modal-body class="text-center">
            <mdb-icon
              icon="exclamation-circle"
              fas
              size="4x"
              class="mb-3 text-center animated bounce"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              ut necessitatibus quo perspiciatis, voluptatem corrupti qui
              reprehenderit molestias assumenda explicabo.
            </p>
          </mdb-modal-body>
          <mdb-modal-footer center>
            <mdb-btn type="submit" name="submit" color="success">
              Get it now
              <mdb-icon icon="cash-register" class="ml-1" color="white" />
            </mdb-btn>
            <mdb-btn outline="danger" @click="show = false">No, thanks</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </div>
    </form>
  </div>
</template>

<script>
// import ordersQuery from "~/apollo/queries/order/orders.gql";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import {
  mdbContainer,
  mdbCol,
  mdbRow,
  mdbInput,
  mdbBtn,
  mdbIcon,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
} from "mdbvue";
export default {
  name: "TimePickerPage",
  components: {
    VueCtkDateTimePicker,
    mdbContainer,
    mdbInput,
    mdbBtn,
    mdbIcon,
    mdbCol,
    mdbRow,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      orders: [
      {
        "id": "1",
        "title": "Photoshoot",
        "description": "Some quick example text to build on the card title and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950739/3_haxune_jnd6g3_47450709a9.jpg"
        },
        "price": 350,
        "video": null
      },
      {
        "id": "2",
        "title": "Videoshoot",
        "description": "Some quick example text to build on the card video and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598794403/Screenshot_from_2020_08_09_22_09_37_ardyrr_0718472192.png"
        },
        "price": 450,
        "video": {
          "url": "https://res.cloudinary.com/dxeebmzdv/video/upload/v1598630487/EOD_wd4m1j_1a7355525b.mp4"
        }
      },
      {
        "id": "3",
        "title": "Montage",
        "description": "Some quick example text to build on the card montage and make up the bulk of the card's content.",
        "image": {
          "url": "https://res.cloudinary.com/dxeebmzdv/image/upload/v1598630660/nevesta_f7f7930fb0.jpg"
        },
        "price": 300,
        "video": null
      }
    ],
      priceResult: [],
      hours: 0,
      totalPrice: 0,
      name: "",
      email: "",
      phone: "",
      value: "",
      limitPosition: 350,
      scrolled: false,
      lastPosition: 0,
      show: false,
    };
  },
  // apollo: {
  //   orders: {
  //     prefetch: true,
  //     query: ordersQuery,
  //   },
  // },
  methods: {
    stepUp() {
      if(this.hours < 11){
        document.querySelector('input[type=number]').stepUp()
        this.hours++
      }
    },
    stepDown(){
      if(this.hours > 0){
        document.querySelector('input[type=number]').stepDown()
        this.hours--
      }
    },
    getHoursValue() {
      if (this.$refs.hour_input.value !== "0") {
        this.show = true;
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z\s]+$/.test(char)) return true;
      else e.preventDefault();
    },
    isNumber(e) {
      e.target.value = e.target.value.replace(/[^0-9]+/g, "");
    },
    isEmail(e) {
      e.target.value = e.target.value.replace(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        ""
      );
    },
    handleShow() {},
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
    getOrderTitle(id) {
      let title = "";
      for (const order in this.orders) {
        title = this.orders.find((title) => title.id == id);
      }
      return title.title;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    total: function () {
      var calculate;
      var hoursTotal = this.hours;
      let orders = this.orders;
      let result = this.priceResult;
      for (let i = 2; i < orders.length; i++) {
        result.push(orders[i].price);
      }
      if (hoursTotal <= 10) {
        calculate = this.hours * result[0];
      } else {
        calculate = result[0] * 10;
        this.hours = 10;
      }
      this.totalPrice = calculate;
    },
  },
};
</script>

<style scoped>
@import "~/assets/css/main.css";
h4,
.h4,
.h2 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}

.h4:hover {
  color: black !important;
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
  transform: translateY(-105%);
}

.service-text {
  width: 50%;
}

.datePicker {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  background-color: transparent;
  border: none;
  width: 100%;
  border-bottom: 1px solid #ced4da;
  border-radius: 0;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  cursor: pointer;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
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
  .service-text {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .cardroom--pinned {
    transform: translateY(-50%);
  }
  .cardroom--unpinned {
    transform: translateY(-150%);
  }
}
</style>
