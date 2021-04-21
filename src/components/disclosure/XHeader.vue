<template>
  <div class="header-content">
    {{projectHeader}}
  </div>
</template>
<script>
export default {
  name : 'x-header',
  props : {
    projectHeader: {
      type : String,
      required: true
    }
  },

}

</script>
<style lang="scss" scoped>
.header-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: 34px;
  background-color: lemonchiffon;
}

</style>
