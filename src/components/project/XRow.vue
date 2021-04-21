<template>
  <div class="row-content"></div>
</template>

<script>
export default {
  name: 'row',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  created() {
    console.log(this.item);
  },
};
</script>
<style lang="scss" scoped>
.row-content {
  width: 700px;
  height: 47px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  border: 1px solid #dfdfdf;
}
</style>
