<template>
  <div>
    <form id="form_checkout" @submit.prevent="checkForm" method="post">
      <mdb-container class="my-5">
        <mdb-row>
          <mdb-col lg="6" class="h-75">
            <NuxtLink
              class="h4 text-uppercase text-warning"
              style="text-decoration: none"
              :to="`${$i18n.locale == 'en' ? '' : '/' + $i18n.locale}/services`"
            >
              <span
                ><mdb-icon class="mr-2 my-5" icon="angle-left" />
                {{ $i18n.locale == "en" ? "Back" : "Назад" }}
              </span>
            </NuxtLink>
            <div class="text-left">
              <h3 class="h2 pt-2">{{ checkoutPage.title }}</h3>
              <p class="service-text mt-3 mb-5">
                {{ checkoutPage.description }}
              </p>
            </div>

            <div
              class="form-group mb-5"
              :class="{ 'form-group--error': $v.name.$error }"
            >
              <mdb-input
                :label="$i18n.locale == 'en' ? 'Your name' : 'Имя'"
                :small="
                  $i18n.locale == 'en'
                    ? 'We will never share your personal data with anyone.'
                    : 'Мы никогда и никому не передадим ваши личные данные.'
                "
                v-model="$v.name.$model"
                icon="user"
              />
              <div class="error" v-if="!$v.name.required">
                {{
                  $i18n.locale == "en"
                    ? "Field is required"
                    : "Обязательно для заполнения"
                }}
                ✱
              </div>
              <div class="error" v-if="!$v.name.minLength">
                {{
                  $i18n.locale == "en"
                    ? `Name must have at least ${$v.name.$params.minLength.min} letters`
                    : `Имя должно иметь не менее ${$v.name.$params.minLength.min} букв`
                }}
              </div>
              <div class="error" v-if="!$v.name.maxLength">
                {{
                  $i18n.locale == "en"
                    ? `Name must have at most ${$v.name.$params.minLength.min} letters`
                    : `Имя должно иметь не более ${$v.name.$params.minLength.min} букв`
                }}
              </div>
              <div class="error" v-if="!$v.name.alpha">
                {{
                  $i18n.locale == "en"
                    ? "Please enter only letters!"
                    : "Пожалуйста введите только буквы!"
                }}
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
                {{
                  $i18n.locale == "en"
                    ? "Field is required"
                    : "Обязательно для заполнения"
                }}
                ✱
              </div>
              <div class="error" v-if="!$v.email.email">
                {{
                  $i18n.locale == "en"
                    ? "Please enter a valid email!"
                    : "Пожалуйста введите правильный email"
                }}
              </div>
            </div>
            <div
              class="form-group mb-5"
              :class="{ 'form-group--error': $v.phone.$error }"
            >
              <mdb-input
                type="text"
                :label="$i18n.locale == 'en' ? 'Phone' : 'Телефон'"
                v-model.trim="$v.phone.$model"
                icon="phone"
              />
              <div class="error" v-if="!$v.phone.required">
                {{
                  $i18n.locale == "en"
                    ? "Field is required"
                    : "Обязательно для заполнения"
                }}
                ✱
              </div>
              <div class="error" v-if="!$v.phone.numeric">
                {{
                  $i18n.locale == "en"
                    ? "Please enter only numbers!"
                    : "Пожалуйста введите только цифры"
                }}
              </div>
              <div class="error" v-if="!$v.phone.minLength">
                {{
                  $i18n.locale == "en"
                    ? `Phone must have at least ${$v.phone.$params.minLength.min} numbers.`
                    : `Телефон должен быть не меньше ${ $v.phone.$params.minLength.min } цифр.`
                }}
              </div>
            </div>
            <mdb-input
              class="mb-5"
              v-model="$v.wish.$model"
              type="textarea"
              id="exampleInput"
              :label="$i18n.locale == 'en' ? 'Wishes' : 'Пожелания'"
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
                    :placeholder="
                      $i18n.locale == 'en'
                        ? 'Please enter your date here'
                        : 'Пожалуйста введите дату здесь'
                    "
                    readonly
                  />
                </VueCtkDateTimePicker>
              </div>
              <div class="error mb-5" v-if="!$v.date.required">
                {{
                  $i18n.locale == "en"
                    ? "Field is required"
                    : "Обязательно для заполнения"
                }}
                ✱
              </div>
            </div>
          </mdb-col>
          <mdb-col lg="6">
            <Summary :items="getOrder" />
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
</template>

<script>
import checkoutPageQuery from "~/apollo/queries/checkout/checkout.gql";
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
export default {
  name: "ChekoutPage",
  apollo: {
    checkoutPage: {
      prefetch: true,
      query: checkoutPageQuery,
      variables() {
        return { locale: this.$i18n.locale };
      },
      update(data) {
        return data.checkoutPage;
      }
    }
  },
  async asyncData({ store, error, redirect }) {
    try {
      const orders = await store.getters["order/items"];
      if (orders.length == 0) {
        return redirect("/");
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events at this time. Please try again."
      });
    }
  },
  components: {
    mdbInput,
    VueCtkDateTimePicker,
    mdbContainer,
    mdbCol,
    mdbIcon,
    mdbRow,
    mdbCard
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.checkoutPage.metatitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.checkoutPage.metades
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.checkoutPage.metatitle
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.checkoutPage.metades
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.checkoutPage.metatitle
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.checkoutPage.metatitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.checkoutPage.metades
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.checkoutPage.metatitle
        },
        ...i18nHead.meta
      ]
    };
  },
  data() {
    return {
      name: "",
      checkoutPage: {},
      email: "",
      phone: "",
      date: "",
      wish: "",
      service: "",
      extralist: null,
      price: 0,
      error: null,
      success: null,
      image: "https://res.cloudinary.com/dxeebmzdv/image/upload/c_thumb,w_200,g_face/v1595950779/1_guaw1o.jpg"
    };
  },
  validations: {
    name: {
      required,
      alpha: helpers.regex("alpha", /^[a-zа-я_ ]*$/i),
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
      console.log(this.extralist);
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
              name: `checkout-review___${this.$i18n.locale}`,
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
      let fixed = this.getExtraList;
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

.h4:hover {
  color: black !important;
}
</style>
