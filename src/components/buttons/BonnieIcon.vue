<template>
  <div>

    <span class="material-icons-outlined">{{iconName}}</span>


  </div>
</template>

<script>
export default {
  name: 'bonnie-icon',

  props: {

  },

  data() {
    return {}
  },

  watch: {

  },

  computed: {
    iconName() {
      return this.$slots.default[0].text
    }
  },

  methods: {

  },

  created() {
  },
};
</script>

<style lang="scss" scoped>
//@import '@/assets/css/button.scss';

</style>
