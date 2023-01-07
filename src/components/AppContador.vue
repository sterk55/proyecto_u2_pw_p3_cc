<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Componente principal</h1>
  <Contador titulo="Estudiante" v-bind:inicio="101"/>
  <Contador titulo="Profesor" v-bind:inicio="200"/>
  <!--<Contador titulo="Test" :inicio="11*20"/>-->
</template>

<script>
  import Contador from './components/Contador.vue'
  export default {
    name: 'App',
    components: {
      Contador
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
