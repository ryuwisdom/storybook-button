<script>
export default {
  name: 'base-button',

  props: {
    size: {
      type: String,
      default: 'regular',
      validator: function(value) {
        return ['small', 'regular', 'large'].indexOf(value) !== -1;
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
  },
};
</script>
