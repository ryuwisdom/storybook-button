<template>
  <div>
    <button type="button" @click="onclick" :class="classes" :style="style">
      <slot></slot>
      <span> {{ label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'bonnie-button',

  props: {
    label: {
      type: String,
      require: true,
    },
    outline: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
        return ['small', 'regular', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
      default: '#524fde',
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      preventHover: false,
      fgColor: null,
      bgColor: null,
    };
  },

  watch: {
    disabled(value) {
      this.preventHover = value;
    },
    backgroundColor(color) {
      this.bgColor = color;
    },
    color(color) {
      this.fgColor = color;
    },
  },

  computed: {
    classes() {
      return {
        'text-button-content': true,
        [`${this.size}`]: true,
        disabled: this.disabled,
        'prevent-hover': this.preventHover,
        'primary-solid': this.outline === 'primary',
        'purple-outline': this.outline === 'purple',
        'gray-outline': this.outline === 'gray',
        'white-outline': this.outline === 'white',
      };
    },
    style() {
      return this.normalStyles[this.outline];
    },
    normalStyles() {
      return {
        primary: {
          backgroundColor: this.bgColor,
          color: this.fgColor,
          border: '1px solid #dde1e6',
        },
        purple: {
          backgroundColor: '#ffffff',
          color: '#524fde',
          border: '1px solid #524fde',
        },
        gray: {
          backgroundColor: '#ffffff',
          color: '#1e2637',
          border: '1px solid #dde1e6',
        },
        white: {
          backgroundColor: '#1e2637',
          color: '#ffffff',
          border: '1px solid #ffffff',
        },
      };
    },
  },

  methods: {
    onclick() {
      console.log('click!');
    },
    setColor(bg, fg) {
      this.bgColor = bg;
      this.fgColor = fg;
    },
  },

  created() {
    this.setColor(this.backgroundColor, this.color);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/button.scss';
</style>
