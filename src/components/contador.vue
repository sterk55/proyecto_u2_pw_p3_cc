<template>
<!-- HTML-->
<h1>Mi primer componente</h1>
  <h2>{{ valorTirulo }}</h2>
  <!--<p>{{numero}} <sup>2</sup> ={{obtenerCuadradoComputado}} </p>
  <p>{{numero}} <sup>2</sup> ={{obtenerCuadradoComputado}} </p>
  <p>{{numero}} <sup>2</sup> ={{obtenerCuadradoComputado}} </p>
  <p>{{numero}} <sup>2</sup> ={{obtenerCuadradoComputado}} </p> -->
  <p>{{numero}} <sup>2</sup> ={{obtenerCuadradoComputado}} </p>
  <div>
    <button v-on:click="incrementar">+1</button>
    <button v-on:click="decrementar">-1</button>
  </div>
</template>

<script>
  export default {
  //Option API (opcion por defecto*)
  // 1. Forma basica
  //props:['titulo','inicio'],

  // 2. Forma correcta
  //props : {
  //  titulo: String,
  //  inicio: Number
  //},

  // 3. Forma avanzada
  props: {
    titulo: String,
    inicio: {
      type: Number,
      required: true,
      default: 67,
      validator(value){
        return value > 100
      }
    }
  },
      //JS
      //nombre a nivel de desarrollo
      name: 'Patito',
      //propiedad reactiva:se actualiza automaticamente
      data(){
        return{
          numero: this.inicio
        }
      },
      methods:{
        obtenerCuadrado(){
          console.log('Se calcula cuadrado')
          return this.numero*this.numero
        },
        incrementar(){
          //var cadena = 'Nicolas'
          //cadena = cadena + ' Carrera'
          this.numero++
          //this.numero = this.numero + 1
        },
        decrementar(){
          //this.numero--
          this.numero = this.numero - 1
        }
      },
      // simpre retorna un valor
      computed:{
        obtenerCuadradoComputado(){
          console.log('Se calcula cuadrado computado')
          return this.numero*this.numero
        },
        valorTirulo(){
          return this.titulo || 'Valor por defecto...'
        }
      }

  }
</script>

<style>
  button{
    background-color: #64b687;
    border-radius: 5px;
    border:1px solid white;
    margin:0px 5px ;
    cursor: pointer;
    padding: 5px 20px;
  }

  button:hover{
    background-color: #5aa67b
  }
</style>