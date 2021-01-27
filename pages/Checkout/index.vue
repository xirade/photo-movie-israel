<template>
  <div>
    <mdb-container class="my-5">
        <router-link
          class="h4 text-uppercase text-warning"
          style="text-decoration: none"
          tag="a"
          :to="'/services'"
        >
          <span><mdb-icon class="mr-2" icon="angle-left" />Back</span>
        </router-link>
      <div class="text-left mt-5">
        <h3 class="h2 pt-2">Service Order Form</h3>
        <p class="service-text mt-3">
          Для того, чтобы сориентировать вас по цене, просим заполнить
          информацию о вас и пожелания к заказу.
        </p>
      </div>
      <br class="p-2" />
      <form id="form_checkout" @submit.prevent="checkForm" method="post">
        <mdb-row>
          <mdb-col md="7" class="h-75">
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.name.$error }"
            >
              <mdb-icon class="mr-2" size="2x" icon="user" />
              <label class="form__label" for="name">Full name: </label>
              <input
                id="name"
                title="Name and surname"
                class="form__input  datePicker"
                v-model="$v.name.$model"
              />
            </div>
            <div class="error" v-if="!$v.name.required">
              Field is required ✱
            </div>
            <div class="error" v-if="!$v.name.minLength">
              Name must have at least
              {{ $v.name.$params.minLength.min }} letters.
            </div>
            <div class="error" v-if="!$v.name.maxLength">
              Name must have at least
              {{ $v.name.$params.maxLength.max }} letters.
            </div>
            <div class="error" v-if="!$v.name.alpha">
              Please enter only letters!
            </div>
            <br />
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.email.$error }"
            >
              <mdb-icon class="mr-2" size="2x" icon="envelope" />
              <label class="form__label" for="email">Email: </label>
              <input
                title="Email adress"
                id="email"
                class=" datePicker"
                v-model.trim="$v.email.$model"
              />
            </div>
            <div class="error" v-if="!$v.email.required">
              Field is required ✱
            </div>
            <div class="error" v-if="!$v.email.email">
              Please enter a valid email!
            </div>
            <br />
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.phone.$error }"
            >
              <mdb-icon class="mr-2" size="2x" icon="phone" />
              <label for="phone">Phone: </label>
              <input
                class="datePicker"
                type="tel"
                title="Phone number"
                maxlength="10"
                id="phone"
                v-model.trim="$v.phone.$model"
              />
            </div>
            <div class="error" v-if="!$v.phone.required">
              Field is required ✱
            </div>
            <div class="error" v-if="!$v.phone.numeric">
              Please enter only numbers!
            </div>
            <div class="error" v-if="!$v.phone.maxLength">
              Phone must have at least
              {{ $v.phone.$params.maxLength.max }} letters.
            </div>
            <div class="mt-5">
              <mdb-icon class="mr-2" size="2x" icon="calendar" />
              <label for="date">Date: </label>
              <br />
              <div class="d-flex flex-row">
                <VueCtkDateTimePicker
                  :error="true"
                  class="mb-3"
                  v-model="date"
                  :first-day-of-week="7"
                  format="YYYY-MM-DD HH:mm"
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
                    '23'
                  ]"
                  minute-interval="10"
                  button-color="blue"
                  color="gray"
                  label="Date"
                >
                  <input
                    v-model="$v.date.$model"
                    class="mt-2 datePicker"
                    id="date"
                    name="date"
                    title="Date and time"
                    placeholder="Please enter your date here"
                    readonly
                  />
                </VueCtkDateTimePicker>
              </div>
                 <div class="error mb-5" v-if="!$v.date.required">
              Field is required ✱
            </div>
            </div>
          </mdb-col>
          <Summary :order="orders" />
        </mdb-row>
      </form>
    </mdb-container>
    <hr class="p-2 mt-5" />
    <div class="text-center py-3">
      <mdb-icon class="mx-3" icon="camera" />
      <mdb-icon class="mx-3" icon="video" />
      <mdb-icon class="mx-3" icon="crop" />
      <mdb-icon class="mx-3" icon="film" />
      <mdb-icon class="mx-3" fab icon="adobe" />
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alpha,
  numeric,
  helpers,
  email
} from "vuelidate/lib/validators";
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";
import { mdbContainer, mdbCol, mdbIcon, mdbRow } from "mdbvue";
import Summary from "../../components/Summary";
import Alert from "../../components/Alert";
export default {
  name: "ChekoutPage",
  components: {
    VueCtkDateTimePicker,
    mdbContainer,
    mdbCol,
    mdbIcon,
    mdbRow,
    Summary,
    Alert
  },
  data() {
    return {
      orders: [
        {
          id: "1",
          title: "Photoshoot",
          description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
          image: {
            url:
              "https://res.cloudinary.com/dxeebmzdv/image/upload/v1597950739/3_haxune_jnd6g3_47450709a9.jpg"
          },
          price: 350,
          video: null
        }
      ],
      name: "",
      email: "",
      phone: null,
      date: "",
      totalPrice: 0,
      isCard: false
    };
  },
  validations: {
    name: {
      required,
      alpha: helpers.regex("alpha", /^[a-z_ ]*$/i),
      minLength: minLength(4),
      maxLength: maxLength(32)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric,
      maxLength: maxLength(10)
    },
    date: {
      required
    }
  },
  async mount() {
    try {
      this.orders = await this.orders.find();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    checkForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log(this.submitStatus);
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          console.log(this.submitStatus);
        }, 500);
      }
    },
    handleCard() {
      this.isCard = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.css";
form {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
}

.error {
  color: crimson;
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

.h4,
.h2 {
  font-family: "Oswald", sans-serif;
}

.h4:hover {
  color: black !important;
}

.service-text {
  width: 50%;
}

@media (max-width: 767px) {
  .service-text {
    width: 100%;
  }
}
</style>
