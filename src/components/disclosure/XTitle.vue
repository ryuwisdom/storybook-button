<template>
  <div class="title-content">
<span>{{projectTitle}}</span>
  </div>
</template>

<script>
export default {
  name: 'x-title',
  props:{
    projectTitle : {
      type: String,
    }
  },
  data() {
    return {
      textWidth: '300px'
    }
  }

}
</script>
<style lang="scss" scoped>
.title-content{
  width: 394px;
  max-width: 394px;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: white;
  font-size: 12px;
  padding: 0 10px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
}
</style>
