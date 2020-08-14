<template>
  <div>
    <mdb-container class="my-5">
      <span>
        <router-link
          class="h4 text-uppercase text-warning"
          style="text-decoration: none;"
          tag="a"
          :to="'/Services'"
        >
          <mdb-icon class="mr-2" icon="angle-left" />Back
        </router-link>
      </span>
      <div class="text-left mt-5">
        <h3 class="h2 pt-2">Service Order Form</h3>
        <p class="service-text mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora est
          ipsam a nesciunt. Sint at laboriosam incidunt tenetur odit quis impedit
          hic vitae cupiditate aperiam!
        </p>
      </div>
      <hr class="p-2" />
      <form id="form" @submit.prevent="submit">
        <mdb-row>
          <mdb-col md="7" class="h-75">
            <mdb-input class="mb-5" label="Name" icon="user" required />
            <mdb-input
              class="mb-5"
              type="email"
              id="email"
              name="email"
              label="Email"
              icon="envelope"
              small="We'll never share your email with anyone."
              required
            />
            <mdb-input
              class="mb-5"
              type="tel"
              label="Your phone"
              icon="phone"
              id="phone"
              name="phone"
              required
            />
            <mdb-input
              class="mb-5"
              wrapperClass="amber-textarea"
              type="textarea"
              id="textarea"
              name="textarea"
              label="Write something here..."
              icon="pencil-alt"
            />
            <div class="d-flex flex-row mb-5">
              <mdb-icon class="mr-2" size="2x" icon="calendar" />
              <VueCtkDateTimePicker
                v-model="value"
                :first-day-of-week="7"
                format="YYYY-MM-DD HH:mm:ss"
                :disabled-weekly="[5,6]"
                :disabled-hours="['00','01','02','03','04','05','06','07','08','22','23']"
                minute-interval="10"
                button-color="blue"
                color="gray"
                id="calendar"
                name="calendar"
                required
              ></VueCtkDateTimePicker>
            </div>
          </mdb-col>
          <mdb-col md="5">
            <mdb-card
              :class="{'cardroom--unpinned': scrolled}"
              class="cardroom cardroom--pinned"
              style="z-index: 1;"
              v-on:scroll="handleScroll"
            >
              <mdb-card-body>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg"
                  class="img-fluid z-depth-1"
                  alt="1"
                />
                <mdb-card-title class="mt-2">Basic card</mdb-card-title>
                <div class="d-flex align-items-center">
                  Amount:
                  <mdb-input
                    class="ml-2 pt-2"
                    type="number"
                    :step="1"
                    :min="0"
                    :max="10"
                    v-model="hours"
                    id="hours"
                    name="hours"
                    style="width:2.2rem;"
                    required
                  />hr
                </div>
                <span>Price:</span>
                <input
                  class="ml-2 d-none"
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  :value="total"
                />
                {{totalPrice}}₪
                <hr />
                <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                <mdb-btn type="submit" @click="show = true" class="px-5" block color="warning">Next</mdb-btn>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </form>
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
            <mdb-modal :show="show" @show="handleShow" @close="show = false" success>
              <mdb-modal-header>
                <mdb-modal-title>Success Modal</mdb-modal-title>
              </mdb-modal-header>
              <mdb-modal-body class="d-flex flex-column">
                <mdb-icon icon="check-circle" fas size="4x" class="mb-3 text-center animated rotateIn" />
                <span class="text-left font-weight-bold">Name: <span class="font-weight-normal">{{person.name}}</span></span>
                <span class="text-left font-weight-bold">Email: <span class="font-weight-normal">{{person.email}}</span></span>
                <span class="text-left font-weight-bold">Phone: <span class="font-weight-normal">{{person.phone}}</span></span>
                <span class="text-left font-weight-bold">Date &amp; Time: <span class="font-weight-normal">{{person.date}}</span></span>
                <span class="text-left font-weight-bold">Amount: <span class="font-weight-normal">{{hours}}hr</span></span>
                <span class="text-left font-weight-bold">Price: <span class="font-weight-normal">{{totalPrice}}₪</span></span>
              </mdb-modal-body>
              <mdb-modal-footer center>
                <mdb-btn color="success" @click="show = false">
                  Get it now
                  <mdb-icon icon="cash-register" class="ml-1" color="white" />
                </mdb-btn>
                <mdb-btn outline="danger" @click="show = false">No, thanks</mdb-btn>
              </mdb-modal-footer>
            </mdb-modal>
          </div>
  </div>
</template>

<script>
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
      value: null,
      limitPosition: 350,
      scrolled: false,
      lastPosition: 0,
      hours: 0,
      price: 250,
      totalPrice: 0,
      maxPrice: 2500,
      show: false,
      person: {
        id: '1',
        name: 'Daniel',
        email: '6myusic6@gmail.com',
        phone: '0587217050',
        text: 'Good job my friends!',
        date: 'вт, 18 авг. 2020 г., 9:00'
      }
    };
  },
  methods: {
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
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    total: function () {
      var calculatedTotal;
      var hoursTotal = this.hours;
      if (hoursTotal <= 10) {
        calculatedTotal = this.hours * this.price;
      } else {
        calculatedTotal = this.maxPrice;
      }
      this.totalPrice = calculatedTotal;
      return calculatedTotal;
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
