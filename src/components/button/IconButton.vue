<template>
  <div class="button-container">
    <div @click="onclick" :class="classes" :style="style">
      <img class="image-content" src="@/assets/images/logo.png"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'icon-button',
  props: {
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
      bgColor: null,
    }
  },
  watch: {
    disabled(value) {
      console.log(value)
      this.setColor(value ? 'gray' : this.backgroundColor)
      this.preventHover = value
    },
    backgroundColor(color) {
      this.bgColor = color
    },
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
      }
    },

  },
  methods: {
    onclick() {
      console.log('click!')
    },
    setColor(bg) {
      this.bgColor = bg
    },

  },
  created() {
    this.setColor(this.backgroundColor)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/button.scss";

.button-content {
  @include baseButton;

  .image-content {
    width: 20px;
    height: 20px;
  }

  min-width: 50px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

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
