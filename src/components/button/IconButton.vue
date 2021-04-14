<template>
  <div>
    <div @click="onclick" :class="classes" :style="style">
      <div v-if="icon === 'right' || icon === 'left'" class="svg-icon">
        <svg class="icon-content" width="24x" height="24px" viewBox="0 0 24 24" version="1.1">
          <polygon id="Path" fill="#1E2637" points="7.41 15.41 12 10.83 16.59 15.41 18 14 12 8 6 14"></polygon>
        </svg>
      </div>
      <div v-else class="svg-icon">

      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'icon-button',

  props: {
    icon: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: 'regular',
      validator: function (value) {
        return ['regular', 'large'].indexOf(value) !== -1;
      }
    },
    // backgroundColor: {
    //   type: String,
    //   default: '#ffffff'
    // },

    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    darkMode: {
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      preventHover: false,
      bgColor: '#ffffff',
    }
  },
  watch: {
    disabled(value) {
      this.preventHover = value
    },
    // backgroundColor(color) {
    //   this.bgColor = color
    // },
  },

  computed: {
    classes() {
      return {
        'icon-button-content': true,
        [`${this.size}`]: true,
        'outlined': this.outlined,
        'disabled': this.disabled,
        'prevent-hover': this.preventHover,
        'dark-mode': this.darkMode ? true : this.darkMode,
        'left': this.icon === 'left',
        'right': this.icon === 'right',
        'chart': this.icon === 'chart',

      }
    },
    style() {
      return this.normalStyles[this.icon]
    },
    normalStyles() {
      // 다크모드가 false일때는 backgroundColor가 먹히
      return {
        left: {transform: 'rotate(-90deg)'},
        right: {transform: 'rotate(90deg)'},
        // chart: {},
      }
    }

  },
  methods: {
    onclick() {
      console.log('click!')
    },
    // setColor(bg) {
    //   this.bgColor = bg
    // },

  },
  created() {
    // this.setColor(this.bgColor)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/button.scss";


</style>
