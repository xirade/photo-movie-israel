<template>
  <mdb-container class="text-center grey-text">
    <h4 class="h4 pt-2">
      Find your <span class="text-primary">connection</span>
    </h4>
    <hr class="p-2 mx-5" />
    <div>
     <mdb-input :value="handlePickersValue()" @click.native="$refs.datePicker.open()" />
    <mdb-date-picker-2
      ref="datePicker"
      disable-input
      v-model="datePickerValue"
      @close="$refs.timePicker.open()" />
    <mdb-time-picker
      ref="timePicker"
      disable-input
      v-model="timePickerValue" />
    </div>

    <hr class="p-2 mt-5 mx-5" />

    <div>
      <mdb-icon class="mx-3" icon="camera" />
      <mdb-icon class="mx-3" icon="video" />
      <mdb-icon class="mx-3" icon="helicopter" />
      <mdb-icon class="mx-3" icon="crop" />
      <mdb-icon class="mx-3" icon="film" />
    </div>
  </mdb-container>
</template>

<script>
  import {
    mdbInput,
    mdbBtn,
    mdbIcon,
    mdbContainer,
    mdbDatePicker2,
    mdbTimePicker,
    mdbCardFooter,
  } from "mdbvue";

  export default {
    name: 'DatePickerPage',
    components: {
      mdbInput,
      mdbIcon,
      mdbContainer,
      mdbDatePicker2,
      mdbTimePicker,
      mdbCardFooter,
    },
    data() {
      return {
          datePickerValue: '',
        timePickerValue: '',
      }
    },
     methods: {
      handlePickersValue() {
        let output = 'Pick date and time'
        if (this.datePickerValue && this.timePickerValue) output = `${this.datePickerValue}, ${this.timePickerValue}`
        else if (this.datePickerValue) output = this.datePickerValue
        else if (this.timePickerValue) output = this.timePickerValue
        return output
      }
    }
  };
</script>