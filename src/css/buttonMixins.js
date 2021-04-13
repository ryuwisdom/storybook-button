export const ButtonMixin = {
  data() {
    return {
      bgColor: null,
      fgColor: null,
    }
  },
  watch: {
    outlined(flag) {
      if (flag) {
        this.setColor('#524fde', '#ffffff')
      } else {
        if (this.disabled) {
          this.setColor('#ffffff', '#ffffff')
        }
      }
    },
    disabled(flag) {
      if (flag) {
        this.setColor('#524fde', '#c3c9d0')
      } else {
        if (this.outlined) {
          console.log('disabled')
          this.setColor('#ffffff', '#c3c9d0')
        }
      }
    },
  },
  computed: {
    classes() {
      return {
        'button-content': true,
        'outlined': this.outlined,
        'disabled': this.disabled,
        [`${this.size}`]: true,
      }
    },
    style() {
      return {
        backgroundColor: this.bgColor,
        color: this.fgColor
      }
    }
  },
  methods: {
    onclick() {
      this.$emit('onclick')
    },
    setColor(bg, fg) {
      this.bgColor = bg
      this.fgColor = fg
    }
  },
  created() {
    this.setColor(this.backgroundColor, this.color)
  },
  /*props: {
    label: {
      type: String,
      require: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String
    },
    outlined: {
      type: Boolean,
      default: false
    }
  }*/
}
