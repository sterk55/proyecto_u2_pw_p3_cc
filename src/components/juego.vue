<template>

    <h1>Juego</h1>
  
    <div class="contenedor-juego" v-if="banderaJuego">
  
      <div>
  
          <p>Puntaje: {{ puntaje }}</p>
  
      <p>Intento: {{ intento }}</p>
  
      </div>
  
      <div>
  
          <img src="https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg" alt="NaN">
  
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg" alt="NaN">
  
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg" alt="NaN">
  
      </div>
  
      <div>
  
          <p>{{ pokemonTexto1 }}</p>
  
          <p>{{ pokemonTexto2 }}</p>
  
          <p>{{ pokemonTexto3 }}</p>
  
      </div>
  
      <button v-on:click="jugar">Jugar</button>
  
    </div>
  
  </template>
  
  
  
  <script>
  
  export default {
  
      data(){
  
          return {
  
              puntaje: 0,
  
              intento: 0,
  
              banderaJuego: true,
  
              pokemonTexto1: 'xxxxxxxxxxxxxxx',
  
              pokemonTexto2: 'xxxxxxxxxxxxxxx',
  
              pokemonTexto3: 'xxxxxxxxxxxxxxx',
  
          }
  
      },
  
      methods: {
  
          jugar(){
  
             
  
          },
  
          obtenerAleatorio(limite){
  
              return Math.floor(Math.random()*limite) + 1
  
          },
  
          async consumirAPI(id){
  
  
  
          },
  
          definirPokemons(){
  
              const vectorIdPokemons = [10,20,30,40]
  
              return vectorIdPokemons
  
          },
  
          construirPokemons(){
  
              const vector = this.definirPokemons()
  
          },
  
          definirJuego(){
  
             
  
          }
  
      }
  
  }
  
  </script>
  
  
  
  <style>
  
  img {
  
      margin: 0px 20px;
  
      width: 250px;
  
      height: 250px;
  
  }
  
  p {
  
      display: inline;
  
      margin: 15px 90px;
  
  }
  
  button {
  
      margin-top: 90px;
  
  }
  
  </style>