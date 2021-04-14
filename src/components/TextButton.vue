<template>
  <div>
    <button type="button" @click="onclick" :class="classes" :style="style">{{ label }}</button>
  </div>
</template>

<script>

export default {
  name: 'text-button',
  props: {
    label: {
      type: String,
      require: true,
    },
    outline: {
      default: 'primary'
    },
    size: {
      type: String,
      default: 'regular',
      validator: function (value) {
        return ['small', 'regular', 'large'].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String,
      default: '#524fde'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      preventHover: false,
      fgColor: null,
      bgColor: null
    }
  },
  watch: {
    disabled(value) {
      this.preventHover = value
    },
    backgroundColor(color) {
      this.bgColor = color
    },
    color(color) {
      this.fgColor = color
    }
  },

  computed: {
    classes() {
      return {
        'button-content': true,
        [`${this.size}`]: true,
        'outlined': this.outline ? true : this.outlined,
        'disabled': this.disabled,
        'prevent-hover': this.preventHover,
        'primary-solid': this.outline === 'primary',
        'purple-outline': this.outline === 'purple',
        'gray-outline': this.outline === 'gray',
        'white-outline': this.outline === 'white',
      }
    },
    style() {
      return this.normalStyles[this.outline]
    },
    normalStyles() {
      return {
        primary: {backgroundColor: this.bgColor, color: this.fgColor, border: '1px solid #dde1e6'},
        purple: {backgroundColor: '#ffffff', color: '#524fde', border: '1px solid #524fde'},
        gray: {backgroundColor: '#ffffff', color: '#1e2637', border: '1px solid #dde1e6'},
        white: {backgroundColor: '#1e2637', color: '#ffffff',border: '1px solid #ffffff'}
      }
    }
  },

  methods: {
    onclick() {
      console.log('click!')
    },
    setColor(bg, fg) {
      this.bgColor = bg
      this.fgColor = fg
    },

  },
  created() {
    this.setColor(this.backgroundColor, this.color)
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/button.scss";

.button-content {
  @include baseButton;
  font-size: 16px;
  min-width: 76px;
  min-height: 36px;
  font-weight: normal;

  &.small {
    font-size: 11px;
    font-weight: normal;
    min-width: 52px;
    min-height: 24px;
  }

  &.large {
    font-size: 16px;
    font-weight: bold;
    min-width: 79px;
    min-height: 48px;
  }

  //&.outlined {
  //  border: 2px solid #dde1e6;
  //}

  &.disabled {
    opacity: 0.4;
  }

  &:hover {
    cursor: pointer;
  }

  &.prevent-hover {
    cursor: unset;
  }
}

button.primary-solid:hover {
  background-color: #3835c7 !important;
  color: #ffffff !important;
  border: solid 1px #dde1e6 !important;
}

button.primary-solid:active {
  background-color: #221ebb !important;
  color: #ffffff !important;
  border: solid 1px #dde1e6 !important;
}

button.purple-outline:hover {
  background-color: #f0f0ff !important;
  color: #524fde !important;
  border: solid 1px #3835c7 !important;
}

button.purple-outline:active {
  background-color: #e6e6ff !important;
  color: #524fde !important;
  border: solid 1px #3835c7 !important;
}

button.gray-outline:hover {
  background-color: #f4f6f9 !important;
  color: #1e2637 !important;
  border: solid 1px #dde1e6 !important;
}

button.gray-outline:active {
  background-color: #ebeef3 !important;
  color: #1e2637 !important;
  border: solid 1px #dde1e6 !important;
}

button.white-outline:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
  border: solid 1px rgba(255, 255, 255, 0.4) !important;
}

button.white-outline:active {
  background-color: #1e2637 !important;
  color: #ffffff !important;
  border: solid 1px rgba(255, 255, 255, 0.4) !important;
  opacity: 0.1 !important;
}
</style>
