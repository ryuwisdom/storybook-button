<template>
  <div class="change-content">
    <span :style="style">{{ change }}</span>
  </div>
</template>

<script>
export default {
  name: 'price',
  props: {
    projectChange: {
      type: Number,
    }
  },
  computed: {
    change() {
      return this.convert(this.projectChange)
    },
    style() {
      return this.colorConvert(this.projectChange)
    }
  },
  methods: {
    convert(rawValue) {
      let change;
      let ret = '-'

      if (isNaN(rawValue)) {
        return ret
      } else if (rawValue === 0) {
        return '0.0'
      }

      try {
        change = Number(rawValue)
      } catch {
        return '-'
      }

      if (change < 0) {
        ret = `${change.toFixed(1)}% `
      } else {
        ret = `+${change.toFixed(1)}%`
      }
      // console.log(ret)
      return ret
    },
    colorConvert(change) {
      if (!change) return;
      //console.log(change)
      if (0 < change) {
        return {color: '#2bb669'};
      } else {
        return {color: '#ff6363'};
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.change-content {
  max-width: 40px;
  padding: 0 5px;
  margin: 0 5px;
  font-size: 11px;
  color: #303d55;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
