<template>
  
<juego/>

</template>

<script>
import juego from './components/juego.vue';

export default {
    name: 'App',
    components: {
      juego
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
