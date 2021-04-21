<template>
  <div class="name-content">
    <span>{{ projectName }}</span>
  </div>
</template>

<script>
export default {
  name: 'x-name',
  props: {
    projectName: {
      type: String,
      required: true
    }
  },
  created() {
    // console.log(this.projectName)
  }


}
</script>
<style lang="scss" scoped>
.name-content {
  width: 76px;
  max-width: 76px;
  font-size: 11px;
  display: flex;
  align-items: center;
}
</style>
