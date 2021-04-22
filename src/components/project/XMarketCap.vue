<template>
  <div class="market-cap-content">
    <span>{{ projectMarketCapConverted }}</span>
  </div>
</template>

<script>
import convert from "@crossangle/decimal-standards"
/* convert = function (d, c, s) {
  const cvt = new DecimalConverter(d, c, s)
  let r = '-'

  try {
    const n = Number(cvt.number)
    if (n < 0 || isNaN(n)) {
      return r;
    }
  } catch {
    console.error('ocurred error')
    return r
  }

  const symbol = CURRENCY_MAP[cvt.currency]
  r = cvt.convert(cvt.symbol ? symbol : '')

  return r < 0 ? '-' : r
}*/

export default {
  name: 'x-market-cap',
  props: {
    projectMarketCap: {
      type: Number,
      required: true,
    },
  },
  computed:{
    projectMarketCapConverted () {
      return convert(this.projectMarketCap, 'USD', '$')
    }
  },
};
</script>
<style lang="scss" scoped>
.market-cap-content {
  width: 100px;
  max-width: 100px;
  font-size: 11px;
  color: #303d55;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
