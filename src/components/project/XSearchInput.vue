<template>
  <div class="search-input-content">
    <input type="text" v-model="name" @keyup="emitName" placeholder="filter by project name"/>

  </div>
</template>

<script>
export default {
  name: 'x-search-input',
  props: {
    projectName: {
      type: String,
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      name: ''
    }
  },
  methods:{
    emitName() {
      this.$emit('search-name', this.name)
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
