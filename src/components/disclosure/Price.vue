<template>
  <div>
    <span>{{projectPrice}}</span>
  </div>
</template>

<script>
export default {
  name: 'price',
  props:{
    projectPrice : {
      type: Number,
      required: true
    }
  },


}
</script>
<style lang="scss" scoped>

</style>
