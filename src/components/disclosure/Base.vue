<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'row',
  props:{
    primary: {
      type: Boolean,
      default: true,
    },
  },


}
</script>
<style lang="scss" scoped>

</style>
