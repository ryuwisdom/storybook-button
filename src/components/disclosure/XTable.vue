<template>
  <div>
    <x-header project-header="공시"></x-header>
    <x-row v-for="d in dataList" :item="d" :key="d._id"></x-row>
  </div>
</template>

<script>
import XRow from '@/components/disclosure/XRow.vue';
import XHeader from "@/components/disclosure/XHeader.vue";


export default {
  name: 'x-table',
  components: {XHeader, XRow},
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    headList: {
      type: Array,
      default: () => [],
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
