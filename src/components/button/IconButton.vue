<template>
  <div>
    <div @click="onclick" :class="classes" :style="style">
      <div v-if="icon === 'right' || icon === 'left'">
        <svg class="icon-content"  viewBox="0 0 24 24" version="1.1">
          <polygon id="Path" fill="#1E2637" points="7.41 15.41 12 10.83 16.59 15.41 18 14 12 8 6 14"></polygon>
        </svg>
      </div>
      <div v-else>
        <svg class="icon-content" viewBox="0 0 24 24" version="1.1">
          <path
              d="M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 Z M9,17 L7,17 L7,10 L9,10 L9,17 Z M13,17 L11,17 L11,7 L13,7 L13,17 Z M17,17 L15,17 L15,13 L17,13 L17,17 Z"
              id="Shape" fill="#1E2637"></path>
        </svg>
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
    backgroundColor(color) {
      this.bgColor = color
    },
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
      return {
        left: {transform: 'rotate(-90deg)'},
        right: {transform: 'rotate(90deg)'},
        chart: {},
      }
    }

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


</style>
