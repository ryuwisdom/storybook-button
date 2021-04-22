<template>
  <div class="spark-line-content">
    <img :src="sparkLineImage" />
  </div>
</template>

<script>
export default {
  name: 'x-market-cap',
  props: {
    sparkLineImage: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.spark-line-content {
  width: 100px;
  max-width: 150px;
  img {
    height: 25px;
  }
}
</style>
