<template>
  <!--HTML-->
  <h1>Mi primer componente</h1>
  <h1>Contador</h1>
  <p>{{numero}} <sup>2</sup> == {{obtenerCuadradoComputado}}</p>
  <!--<p>{{numero}} <sup>2</sup> == {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>2</sup> == {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>2</sup> == {{obtenerCuadradoComputado}}</p>
  <p>{{numero}} <sup>2</sup> == {{obtenerCuadradoComputado}}</p>-->
<div>
  <button v-on:click="sumarUno">+1</button>
  <button v-on:click="restarUno">-1</button>
</div>

</template>

<script>
/* JS */ 
export default {
  props:['titulo'],
    name:'contador',
    data(){
      return{
        numero:7
      }
    },
    methods:{
      obtenerCuadrado(){
        return this.numero * this.numero
      },
      sumarUno(){
          this.numero = this.numero + 1
      },
      restarUno(){
          this.numero = this.numero - 1
      }
    },
    computed:{
      obtenerCuadradoComputado(){
        return this.numero * this.numero 
      }
    }
}
</script>

<style>
/* CSS */
button{
  background-color: #64b687;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 5px;
  margin: 0px 5px;
  padding: 5px 20px;

}
button:hover{
  background-color: #5aa67b;
}
</style>