<template>
  <div>
    <span>{{ projectName }}</span>
  </div>
</template>

<script>
export default {
  name: 'name',
  props: {
    projectName: {
      type: String,
      required: true
    }
  },
  created() {
    console.log(this.projectName)
  }


}
</script>
<style lang="scss" scoped>

</style>
