<template>
  <span class="material-icons-outlined">{{ iconName }}</span>
</template>

<script>
import { ButtonMixin } from '@/common/button.mixins.js';
export default {
  name: 'bonnie-icon',
  mixins: [ButtonMixin],
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

.icon-button-content {
  @include baseButton;

  min-width: 24px;
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  &.small {
    min-width: 24px;
    min-height: 24px;

    img {
      width: 24px;
      height: 24px;
    }
  }
  &.large {
    min-width: 36px;
    min-height: 36px;

    img {
      width: 36px;
      height: 36px;
    }
  }

  &.outlined {
    border: 1px solid #dde1e6;
  }

  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  &.prevent-hover {
    opacity: unset;
    cursor: unset;
  }

  &:active {
    opacity: 0.8;
    cursor: pointer;
  }

  &.dark-mode {
    background-color: #1e2637;
    border: solid 1px #ffffff;
  }
}
</style>
