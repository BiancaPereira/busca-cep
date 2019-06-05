<template>
  <div id="app">
    <ShowAddress/>
  </div>
</template>

<script>
import ShowAddress from './components/ShowAddress'

export default {
  name: 'App',
  components: {
    ShowAddress
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5vw auto 10px auto;
  max-width: 600px
}
</style>
