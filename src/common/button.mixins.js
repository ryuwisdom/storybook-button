export const ButtonMixin = {
  props: {
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
        return ['small', 'regular', 'large'].indexOf(value) !== -1;
      },
    },
    disabled: {
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
