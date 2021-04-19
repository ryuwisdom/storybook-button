<template>
  <div class="logo-container">
<!--    <img src="@/assets/images/logo.png">-->
    <img :src="projectLogo">
  </div>
</template>

<script>
export default {
  name: 'logo',
  props:{
    projectLogo: {
      type: String,
      required: true,
    }
  },

  created() {
    console.log(this.projectLogo)
  }
}
</script>
<style lang="scss" scoped>


</style>
