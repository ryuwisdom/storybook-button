<template>
  <div>
    <div class="search-box">
      <x-search-input @search-name="onInputName"></x-search-input>
      <x-button label="검색" @click.native="onSearchClick"></x-button>
    </div>
    <x-table :data-list="searchedList"></x-table>
  </div>
</template>
<script>
import XButton from "@/components/buttons/BonnieButton";
import XTable from "@/components/project/XTable";
import XSearchInput from "@/components/project/XSearchInput";

export default {
  name: 'project-view',
  components: {XSearchInput, XTable, XButton},
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    imageItems: {
      type: Object,
      default: () => {
      },
    },
  },
  data() {
    return {
      projectName: ''
    }
  },
  computed: {
    parsedList() {
      return this.dataList.map(d => {
        d.logo = this.imageItems[d.slug].logo || 'default'
        d.sparkline = this.imageItems[d.slug].url
        return d
      })
    },
    searchedList() {
      if (this.projectName) {
        return this.parsedList.filter(d => {
          return d['slug'].toLowerCase().includes(this.projectName)
        })
      } else {
        return this.parsedList
      }
    }
  },
  methods: {
    onSearchClick() {
      console.log('search')
    },
    onInputName(name) {
      console.log('input', name)
      this.projectName = name
    }
  },
}
</script>
<style lang="scss" scoped>
.search-box {
  display: flex;
  align-items: center;
}
</style>
