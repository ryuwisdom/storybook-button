<template>
  <div>
    <div @click="onclick" :class="classes" :style="style">
      <!-- <img src="../../assets/images/chart.svg" /> -->
      <img src="image_name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'icon-button',

  props: {
    icon: {
      type: String,
      default: 'left',
    },
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
        return ['regular', 'large'].indexOf(value) !== -1;
      },
    },
    // backgroundColor: {
    //   type: String,
    //   default: '#ffffff'
    // },

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
      image_name: `${this.icon}.svg`,
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
        left: this.icon === 'left',
        right: this.icon === 'right',
        chart: this.icon === 'chart',
      };
    },
    style() {
      return this.normalStyles[this.icon];
    },
    normalStyles() {
      // 다크모드가 false일때는 backgroundColor가 먹히
      return {
        left: { transform: 'rotate(-90deg)' },
        right: { transform: 'rotate(90deg)' },
        // chart: {},
      };
    },
  },
  methods: {
    onclick() {
      console.log('click!');
    },
    // setColor(bg) {
    //   this.bgColor = bg
    // },
  },
  created() {
    // this.setColor(this.bgColor)
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/button.scss';
</style>
