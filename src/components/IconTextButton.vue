<template>
  <div class="button-container">
    <button type="button" @click="onclick" :class="classes" :style="style">
      <div class="contents">
        <img class="image-content" src="@/assets/logo.png"/> {{ label }}
      </div>

    </button>
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
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
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
      bgColor: null,
    }
  },
  watch: {
    disabled(value) {
      this.setColor(value ? 'gray' : this.backgroundColor, value ? '#ffffff' : this.color)
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
        'outlined': this.outlined,
        'disabled': this.disabled,
        'prevent-hover': this.preventHover
      }
    },
    style() {
      return {
        backgroundColor: this.bgColor,
        color: this.fgColor,
      }
    },

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

  .contents {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-content {
      height: 20px;
      width: 20px;
      margin-right: 6px;
    }
  }

  font-size: 14px;
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: center;

  &.small {
    font-size: 11px;
    min-width: 53px;
    min-height: 24px;
  }

  &.large {
    font-size: 16px;
    min-width: 87px;
    min-height: 48px;
  }

  &.outlined {
    border: 2px solid #dde1e6;
  }

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  &.prevent-hover {
    opacity: unset;
    cursor: unset;
  }

  &:active {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
