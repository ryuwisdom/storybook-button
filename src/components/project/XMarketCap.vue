<template>
  <div class="market-cap-content">
    <span>{{ marketCap }}</span>
  </div>
</template>

<script>
export default {
  name: 'x-market-cap',
  props: {
    projectMarketCap: {
      type: Number,
      required: 0,
    },
  },
};
</script>
