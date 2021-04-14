<template>
  <div>
    <div @click="onclick" :class="classes" :style="style">
      <svg class="image-content" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Common/Icon/24/L/Arrow 02/Top</title>
        <g id="Common/Icon/24/L/Arrow-02/Top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <polygon id="Path" fill="#1E2637" points="7.41 15.41 12 10.83 16.59 15.41 18 14 12 8 6 14"></polygon>
        </g>
      </svg>
<!--      <img  src="@/assets/logo.png"/>-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'icon-button',
  props: {
    size: {
      type: String,
      default: 'large',
      validator: function (value) {
        return ['regular', 'large'].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
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
@import "@/css/button.scss";

.button-content {
  @include baseButton;

  .image-content {
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
  }

  min-width: 36px;
  min-height: 36px;
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
