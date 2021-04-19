<template>
  <div>
<span>{{projectTitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'logo',
  props:{
    projectTitle : {
      type: String,
      require : true
    }
  },


}
</script>
<style lang="scss" scoped>

</style>
