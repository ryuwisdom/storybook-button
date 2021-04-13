<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <text-button></text-button>
    <icon-button></icon-button>
    <icon-text-button></icon-text-button>
  </div>

</template>

<script>
import TextButton from './components/TextButton.vue';
import IconButton from './components/IconButton.vue';
import IconTextButton from './components/IconTextButton.vue';
export default {
  name: 'App',
  components: {
    TextButton, IconButton, IconTextButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
