<template>
  <div>
    <x-row v-for="d in dataList" :item="d" :key="d.project_id"></x-row>
  </div>
</template>

<script>
import XRow from '@/components/project/XRow.vue';

export default {
  name: 'x-table',
  components: {XRow},
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    // imageItems: {
    //   type: Object,
    //   default: () => {},
    // },
    // projectName: {
    //   type: String,
    //   default: 'BTC'
    // },
    // headList: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  // computed : {
  //   parsedList() {
  //     return this.dataList.map(d => {
  //       d.logo = this.imageItems[d.slug].logo || 'default'
  //       d.sparkline = this.imageItems[d.slug].url
  //       return d
  //     })
  //   }
  // },
  created() {
    // console.log(this.imageItems[`${this.projectName}`].logo)
    // for (let d of this.dataList) {
    //   if (Object.keys(d.current_price).length === 0) console.log(d.project_id)
    // }
  }
}


</script>
<style lang="scss" scoped>
</style>
