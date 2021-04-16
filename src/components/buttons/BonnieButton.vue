<template>
  <div class="inline-button">
    <slot></slot>
    <span style="margin-left: 5px">+_+</span>
  </div>
</template>

<script>
export default {
  name: 'bonnie-button',

  props: {
  },

  data() {
    return {}
  },

  watch: {
  },

  computed: {
  },

  methods: {
  },

  created() {

  },
};
</script>

<style lang="scss" scoped>
//@import '@/assets/css/button.scss';
.inline-button {
  display: flex;
  align-items: center;
}
</style>
