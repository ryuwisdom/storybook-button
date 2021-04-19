<template>
  <div>
    <span>{{projectDate}}</span>
  </div>
</template>

<script>
export default {
  name: 'price',
  props:{
    projectDate : {
      type: String,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
