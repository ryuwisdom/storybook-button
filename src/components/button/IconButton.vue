<template>
  <div @click="onclick" :class="classes">
    <span class="material-icons-outlined">pets</span>
  </div>
</template>

<script>
export default {
  name: 'icon-button',

  props: {
    icon: {
      type: String,
      default: 'chart',
    },
    size: {
      type: String,
      default: 'regular',
      validator: function (value) {
        return ['regular', 'large'].indexOf(value) !== -1;
      },
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      preventHover: false,
      bgColor: '#ffffff',
      iconFileName: `assets/images/logo.png`,
    };
  },

  watch: {
    disabled(value) {
      this.preventHover = value;
    },
    icon(value) {
      this.setIcon(value)
    }
  },

  computed: {
    classes() {
      return {
        'icon-button-content': true,
        [`${this.size}`]: true,
        outlined: this.outlined,
        disabled: this.disabled,
        'prevent-hover': this.preventHover,
        'dark-mode': this.darkMode ? true : this.darkMode,
      };
    },
  },

  methods: {
    onclick() {
      console.log('click!');
    },
    setIcon(icon) {
      this.iconFileName = `assets/images/${icon}.svg`
    }
  },

  created() {
    this.setIcon(this.icon)
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/button.scss';
</style>
