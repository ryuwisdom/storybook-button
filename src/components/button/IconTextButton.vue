<template>
  <div>
    <button type="button" @click="onclick" :class="classes" :style="style">
      <div class="contents">
        <img :src="iconFileName"/> {{ label }}
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
    icon: {
      type: String,
      default: 'chart'
    },
    outline: {
      type: String,
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
      bgColor: null,
      iconFileName: `assets/images/logo.png`
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
        'icon-text-button-content': true,
        [`${this.size}`]: true,
        'outlined': this.outlined,
        'disabled': this.disabled,
        'prevent-hover': this.preventHover,
        'primary-solid': this.outline === 'primary',
        'purple-outline': this.outline === 'purple',
        'gray-outline': this.outline === 'gray',
        'white-outline': this.outline === 'white',
      }
    },
    style() {
      return this.normalStyle[this.outline]
    },
    normalStyle() {
      return {
        primary: {backgroundColor: this.bgColor, color: this.fgColor, border: '1px solid #dde1e6'},
        purple: {backgroundColor: '#ffffff', color: '#524fde', border: '1px solid #524fde'},
        gray: {backgroundColor: '#ffffff', color: '#1e2637', border: '1px solid #dde1e6'},
        white: {backgroundColor: '#1e2637', color: '#ffffff', border: '1px solid #ffffff'}
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
    setIcon(icon) {
      this.iconFileName = `assets/images/${icon}.svg`
    }

  },
  created() {
    this.setColor(this.backgroundColor, this.color)
    this.setIcon(this.icon)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/button.scss";
</style>
