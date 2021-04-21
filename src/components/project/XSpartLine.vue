<template>
  <div class="spart-line-content">
    <img :src="spartLineImage" />
  </div>
</template>

<script>
export default {
  name: 'x-market-cap',
  props: {
    spartLineImage: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
