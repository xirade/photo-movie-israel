<template>
  <label
    :for="id + '_button'"
    :class="{ active: isActive }"
    class="toggle__button"
  >
    <span v-if="isActive" class="toggle__label"></span>
    <span v-if="!isActive" class="toggle__label"></span>

    <input
      type="checkbox"
      :disabled="disabled"
      :id="id + '_button'"
      v-model="checkedValue"
    />
    <span class="toggle__switch"></span>
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: "switcher"
    },
    defaultState: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentState: this.defaultState
    };
  },
  watch: {
    defaultState: function defaultState() {
      this.currentState = Boolean(this.defaultState);
    }
  },
  computed: {
    isActive() {
      return this.currentState;
    },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue) {
        this.currentState = newValue;
        this.$emit("change", newValue);
      }
    }
  }
};
</script>

<style scoped>
.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}

.toggle__button .toggle__switch {
  display: inline-block;
  height: 14px;
  border-radius: 6px;
  font-size: 26px;
  text-align: center;
  line-height: 24px;
  color: white;
  width: 44px;
  background: #a1a1a1;
  box-shadow: inset 0 0 1px #a1a1a1;
  position: relative;
  transition: all 0.3s;
}

.toggle__button .toggle__switch::after,
.toggle__button .toggle__switch::before {
  content: "×";
  position: absolute;
  display: block;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  left: 0;
  top: -4px;
  transform: translateX(0);
  transition: all 0.3s
}
.toggle__button .toggle__switch::after {
  background: #4d4d4d;
  box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
  background: #4d4d4d;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  opacity: 0;
}
.active .toggle__switch {
  background: #adedcb;
  box-shadow: inset 0 0 1px #adedcb;
}
.active .toggle__switch::after,
.active .toggle__switch::before {
  content: "✓";
  transform: translateX(44px - 22px);
}
.active .toggle__switch::after {
  left: 22px;
  background: #53b883;
  box-shadow: 0 0 1px #2c6145;
}
</style>
