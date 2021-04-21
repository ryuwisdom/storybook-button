<template>
  <div>
    <x-button @click.native="onPrevClick" label="<"></x-button>
    <x-button @click.native="onNextClick" label=">"></x-button>
    <x-table :data-list="parsedList"></x-table>
  </div>
</template>
<script>
import XButton from '@/components/buttons/BonnieButton.vue';
import XTable from '@/components/disclosure/XTable.vue';

export default {
  name: 'disclosure',
  components: {XButton, XTable},
  props: {
    dataList: {
      type: Array,
      default: () => []
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
