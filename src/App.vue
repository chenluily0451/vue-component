<template>
  <div id="app">
    <ComponentContainer/>
  </div>
</template>

<script>
import ComponentContainer from './components/ComponentContainer.vue'

export default {
  name: 'app',
  components: {
    ComponentContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
}
  body{padding:0;margin:0}
</style>
