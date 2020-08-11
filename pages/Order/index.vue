<template>
  <div>
    <mdb-container class="my-5">
      <span><router-link class="h4 text-uppercase text-warning" style="text-decoration: none;"  
          tag="a" :to="'/Services'"><mdb-icon class="mr-2" icon="angle-left" />Back</router-link></span>
      <div class="text-left mt-5">
        <h3 class="h2 pt-2">Service Order Form</h3>
        <p class="mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora est
          ipsam a nesciunt. Sint at laboriosam incidunt tenetur odit quis impedit
          hic vitae cupiditate aperiam!
        </p>
      </div>
      <hr class="p-2" />
      <mdb-row>
        <mdb-col md="7">
          <mdb-input bg label="Name" icon="user" />
          <mdb-input
            bg
            type="email"
            label="Email"
            icon="envelope"
            small="We'll never share your email with anyone."
          />
          <mdb-input type="tel" label="Your phone" icon="phone" />
          <div class="mb-5">
            <VueCtkDateTimePicker v-model="value" :first-day-of-week="7" inline color="gray"></VueCtkDateTimePicker>
          </div>
        </mdb-col>
        <mdb-col md="5" class="my-auto">
          <mdb-card>
            <mdb-card-body>
              <mdb-card-title>Basic card</mdb-card-title>
              <p><span>6hr </span> | <span> 450₪</span></p>
              <hr class="p-2" />
              <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
              <mdb-btn class="px-5 mt-5" block color="warning">Next</mdb-btn>
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
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style scoped>
@import "~/assets/css/main.css";
h4,.h4, .h2 {
  font-family: "DINNeuzeitGroteskLTW01-BdCn";
}
.h4:hover {
  color: black !important;
}
.card {
  background-color: #fff;
}
</style>
