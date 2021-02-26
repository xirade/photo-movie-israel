<template>
  <div>
    <div>
      <form id="form_checkout" @submit.prevent="checkForm" method="post">
        <mdb-container class="my-5">
          <mdb-row>
            <mdb-col lg="6" class="h-75">
              <router-link
                class="h4 text-uppercase text-warning"
                style="text-decoration: none"
                tag="a"
                :to="'/services'"
              >
                <span
                  ><mdb-icon class="mr-2 my-5" icon="angle-left" />Back</span
                >
              </router-link>
              <div class="text-left">
                <h3 class="h2 pt-2">{{checkoutPage.title}}</h3>
                <p class="service-text mt-3 mb-5">
                  {{checkoutPage.description}}
                </p>
              </div>

              <div
                class="form-group mb-5"
                :class="{ 'form-group--error': $v.name.$error }"
              >
                <mdb-input
                  label="Your name"
                  small="We'll never share your personal data with anyone."
                  v-model="$v.name.$model"
                  icon="user"
                />
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
              </div>
              <div
                class="form-group mb-5"
                :class="{ 'form-group--error': $v.email.$error }"
              >
                <mdb-input
                  label="Email"
                  v-model.trim="$v.email.$model"
                  icon="envelope"
                />
                <div class="error" v-if="!$v.email.required">
                  Field is required ✱
                </div>
                <div class="error" v-if="!$v.email.email">
                  Please enter a valid email!
                </div>
              </div>
              <div
                class="form-group mb-5"
                :class="{ 'form-group--error': $v.phone.$error }"
              >
                <mdb-input
                  type="text"
                  label="Phone"
                  v-model.trim="$v.phone.$model"
                  icon="phone"
                />
                <div class="error" v-if="!$v.phone.required">
                  Field is required ✱
                </div>
                <div class="error" v-if="!$v.phone.numeric">
                  Please enter only numbers!
                </div>
                <div class="error" v-if="!$v.phone.minLength">
                  Phone must have at least
                  {{ $v.phone.$params.minLength.min }} numbers.
                </div>
              </div>
              <mdb-input
                class="mb-5"
                v-model="$v.wish.$model"
                type="textarea"
                id="exampleInput"
                label="Wishes"
                icon="tag"
              />
              <div>
                <div class="calendar d-flex flex-row">
                  <label class="control-label" for="date"
                    ><mdb-icon class="mr-3" size="2x" icon="calendar"
                  /></label>
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
            <mdb-col lg="6">
              <Summary />
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </form>
      <hr class="p-2 mt-5" />
      <div class="text-center py-3">
        <mdb-icon class="mx-3" icon="camera" />
        <mdb-icon class="mx-3" icon="video" />
        <mdb-icon class="mx-3" icon="crop" />
        <mdb-icon class="mx-3" icon="film" />
        <mdb-icon class="mx-3" fab icon="adobe" />
      </div>
    </div>
  </div>
</template>

<script>
import checkoutPageQuery from "~/apollo/queries/checkout/checkout.gql"
import { mapMutations } from "vuex";
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
import {
  mdbContainer,
  mdbCol,
  mdbInput,
  mdbIcon,
  mdbRow,
  mdbCard
} from "mdbvue";
import Summary from "../../components/summary.vue";
import Alert from "../../components/Alert";
export default {
  name: "ChekoutPage",
  components: {
    mdbInput,
    VueCtkDateTimePicker,
    mdbContainer,
    mdbCol,
    mdbIcon,
    mdbRow,
    mdbCard,
    Summary,
    Alert
  },
    apollo: {
    checkoutPage: {
      prefetch: true,
      query: checkoutPageQuery,
    }
  },
   head() {
    return {
      title: this.checkoutPage.metatitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.checkoutPage.metades
        }
      ]
    };
  },
  data() {
    return {
      checkoutPage: {},
      id: null,
      name: "",
      email: "",
      phone: "",
      date: "",
      wish: "",
      service: "",
      extralist: null,
      price: 0,
      error: null,
      success: null
    };
  },
  async mounted() {
    try {
      const response = (await this.$store.state.order.items[0].id) != undefined;
      this.id = response;
    } catch (error) {
      return this.$nuxt.error({
        statusCode: 500,
        message: "err message"
      });
    }
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
      minLength: minLength(10)
    },
    date: {
      required
    },
    price: {
      required
    },
    wish: {},
    extralist: {},
    service: {}
  },
  methods: {
    checkForm() {
      this.service = this.getOrder[0].name;
      this.price = this.getOrder[0].price + this.getTotalPrice;
      this.extralist = this.extralistToString;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log(this.submitStatus);
      } else {
        this.$axios
          .post("/checkouts", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            wish: this.wish,
            date: this.date,
            price: this.price,
            service: this.service,
            extralist: this.extralist
          })
          .then(res => {
            this.success = true;
            this.removeOrder();
            this.removeExtra();
            this.$router.push({
              name: "Checkout-review",
              path: "/Checkout/review",
              params: { success: this.success }
            });
          })
          .catch(error => {
            this.submitStatus = "ERROR";
            console.log(this.submitStatus);
          });
      }
    },
    ...mapMutations({
      removeOrder: "order/emptyList",
      removeExtra: "cart/emptyList"
    })
  },
  computed: {
    getOrder() {
      return this.$store.getters["order/items"];
    },
    getTotalPrice() {
      return this.$store.getters["cart/price"];
    },
    getExtraList() {
      return this.$store.getters["cart/extralist"];
    },
    extralistToString() {
      let fixed = Object.assign({}, this.getExtraList);
      return JSON.stringify(fixed, null, "\t");
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
}

.error {
  color: crimson;
}

div.calendar:focus-within .control-label {
  color: #4285f4;
  transition: color 0.2s;
}
div.calendar:focus-within .datePicker {
  border-bottom: 1px solid #4285f4;
  width: 100%;
  -webkit-box-shadow: 0 1px 0 0 #4285f4;
  box-shadow: 0 1px 0 0 #4285f4;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.datePicker {
  border: none;
  width: 100%;
  outline: none;
  border-bottom: 1px solid #ced4da;
}

.h4,
.h2 {
  font-family: "Oswald", sans-serif;
}

.h4:hover {
  color: black !important;
}
</style>
