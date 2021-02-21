<template>
  <div class="minusplusnumber">
    <div class="mpbtn plus" v-on:click="mpplus()">
      +
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    value: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    }
  },
  data() {
    return {
      counter: {
        id: 0,
        value: 0,
        active: false
      }
    };
  },
  methods: {
    mpplus() {
      if (this.counter.value >= this.max) {
        this.counter.active = true;
        this.$emit("input", this.counter);
      } else {
        this.counter.value += 1;
        this.counter.active = true;
        this.$emit("input", this.counter);
      }
    }
  },
  watch: {
    value: {
      handler: function(newVal, oldVal) {
        this.counter.value = newVal;
      }
    }
  },
  created: function() {
    this.counter.id = this.id;
    this.counter.value = this.value;
  }
};
</script>
<style lang="scss" scoped>
.minusplusnumber {
  border: 1px solid silver;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 5px 0 5px;
  display: inline-block;
  user-select: none;
}
.minusplusnumber div {
  display: inline-block;
}
.minusplusnumber #field_container input {
  width: 50px;
  background-color: #f8f9fa;
  color: black;
  text-align: center;
  font-size: 15px;
  padding: 3px;
  border: none;
}
.minusplusnumber .mpbtn {
  padding: 3px 10px 3px 10px;
  cursor: pointer;
  border-radius: 5px;
}
.minusplusnumber .mpbtn:hover {
  background-color: #ddd;
}
.minusplusnumber .mpbtn:active {
  background-color: #c5c5c5;
}
</style>
