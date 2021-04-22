<template>
  <div class="search-input-content">
    <input type="search" v-model="projectName"

           placeholder="filter by project name"/>

  </div>
</template>

<script>
export default {
  name: 'x-search-input',
  props: {
    name: {
      type: String,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      projectName: ''
    }
  },
  watch: {
    projectName(name) {
      this.$emit('search-name', name)
    }
  },
  methods:{
    emitName() {
      // this.$emit('search-name', this.name)
    }
  }
};
</script>
<style lang="scss" scoped>
.search-input-content {
  input {
    height: 32px;
  }
}
</style>
