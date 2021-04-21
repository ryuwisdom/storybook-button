<template>
  <div class="search-input-content">
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'x-search-input',
  props: {
    projectMarketCap: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
