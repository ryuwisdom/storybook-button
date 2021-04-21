<template>
  <div>
    <x-button  :callback="onPrevClick" label="<"></x-button>
    <x-button :callback="onNextClick" label=">"></x-button>
    <x-table ref="bonnie" :data-list="dataList"></x-table>
  </div>
</template>
<script>
import XButton from '@/components/buttons/BonnieButton.vue';
import XTable from '@/components/disclosure/XTable.vue';

export default {
  name : 'disclosure',
  components : {XButton, XTable},
  props: {
    dataList : {
      type : Array,
      default : ()=> []
    }
  },
  methods: {
    onNextClick(label) {
      console.log('next', label)
      this.$refs['bonnie'].onNextClick()
    },
    onPrevClick(label) {
      console.log('prev', label)
      this.$refs['bonnie'].onPrevClick()
    }
  },
  mounted() {
    console.log(this.$refs)
  }
}
</script>
