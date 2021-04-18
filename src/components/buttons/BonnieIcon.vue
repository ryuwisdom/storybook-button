<template>
  <span class="material-icons-outlined">{{ iconName }}</span>
</template>

<script>
export default {
  name: 'bonnie-icon',

  props: {
    iconName: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
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
    };
  },

  watch: {
    disabled(value) {
      this.preventHover = value;
    },
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
  },

  created() {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/button.scss';
</style>
