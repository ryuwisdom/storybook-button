<template>
  <div>
    <span class="material-icons-outlined">{{ iconName }}</span>
  </div>
</template>

<script>
export default {
  name: 'bonnie-icon',

  props: {
    iconName: {
      type: String,
      require: true,
      // default: 'home',
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
      bgColor: '#ffffff',
      // iconFileName: `notes`,
    };
  },

  watch: {
    disabled(value) {
      this.preventHover = value;
    },
    // iconName(iconName) {
    //   this.iconFileName = iconName;
    // },
  },

  computed: {
    //   iconName() {
    //     return this.$slots.default[0].text;
    //   },
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
      console.log(this.$props);
      console.log('click!');
    },
  },

  created() {
    // this.setIconName(this.iconName);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/button.scss';
</style>
