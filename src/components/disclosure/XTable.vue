<template>
  <div>
    <bonnie-icon icon-name="arrow_left" @click.native="onPrevClick" :disabled="currentPage === 0"></bonnie-icon>
    {{currentPage}}
    <bonnie-icon icon-name="arrow_right" @click.native="onNextClick" :disabled="isLastPage"></bonnie-icon>
    <x-row v-for="d in parsedList" :item="d" :key="d._id"></x-row>
  </div>
</template>

<script>
import XRow from '@/components/disclosure/XRow.vue';
import BonnieIcon from "@/components/buttons/BonnieIcon";

export default {
  name: 'x-table',
  components: {BonnieIcon, XRow},
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Number,
      default: 8
    },
    page: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      currentPage: 0
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler: function (page) {
        console.log(page)
      }
    }
  },

  computed: {
    parsedList() {
      let startPoint = this.currentPage * this.rows
      let endPoint = this.rows + startPoint

      return this.dataList.slice(startPoint, endPoint)
    },
    isLastPage() {
      const pagingCount = (this.currentPage + 1) * this.rows
      return this.dataList.length <= pagingCount
    }
  },

  methods: {
    onNextClick() {
      if (this.isLastPage) return
      this.currentPage += 1
    },
    onPrevClick() {
      if (this.currentPage <= 0) return
      this.currentPage -= 1
    }
  },

  created() {
    this.currentPage = this.page
  }

}
</script>
<style lang="scss" scoped>

</style>
