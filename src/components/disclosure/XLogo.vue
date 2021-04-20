<template>
  <div class="logo-content">
    <img :src="projectLogo">
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: {
    projectLogo: {
      type: String,
      required: true,
    }
  },

  created() {
    // console.log(this.projectLogo, this)
  }
}
</script>
<style lang="scss" scoped>
.logo-content {
  max-width: 20px;
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
