<template>
  <div class="price-content">
    <span>{{ price }}</span>
  </div>
</template>

<script>
export default {
  name: 'price',
  props: {
    projectPrice: {
      type: Number,

    }
  },
  computed: {
    price() {
      return this.convert(this.projectPrice)
    }
  },
  methods: {
    convert(rawValue) {
      let price;

      let ret = 'N/A'

      if (isNaN(rawValue)) {
        return ret
      } else if (rawValue === 0) {
        return '0.0'
      }

      try {
        price = Number(rawValue)
      } catch {
        return 'N/A'
      }

      // KOR(WON)
      if (price > 0.0000001 && price < 1) {
        ret = price.toFixed(6)
      } else if (price >= 1 && price < 100) {
        ret = price.toFixed(3)
      } else if (price >= 100 && price < 100000) {
        ret = price.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
        // console.log(ret)
      return ret
    }
  },

}
</script>
<style lang="scss" scoped>
.price-content {
  width: 100px;
  max-width: 100px;
  font-size: 11px;
  color: #303d55;
  font-weight: normal;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
