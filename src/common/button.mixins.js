export const ButtonMixin = {
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
        [`${this.size}`]: true,
        disabled: this.disabled,
        'prevent-hover': this.preventHover,
      };
    },
  },
  methods: {
    onclick() {
      console.log('click');
      this.$emit('onclick');
    },
  },
  created() {},
};
