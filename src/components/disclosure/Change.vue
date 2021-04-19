<template>
  <div>
    <span>{{projectChange}}</span>
  </div>
</template>

<script>
export default {
  name: 'price',
  props:{
    projectChange : {
      type: Number,
      required: true
    }
  },


}
</script>
<style lang="scss" scoped>

</style>
