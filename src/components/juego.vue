<template>

    <h1>Juego</h1>
  
    <div class="contenedor-juego" v-if="banderaJuego">
  
      <div>
  
          <p>Puntaje: {{ puntaje }}</p>
  
      <p>Intento: {{ intento }}</p>
  
      </div>
  
      <div v-if="mostraInicio">
  
          <img class="imgPoke" v-bind:src="pokemon1.ruta" alt="NaN">
  
          <img class="imgPoke" v-bind:src="pokemon2.ruta" alt="NaN">
  
          <img class="imgPoke" v-bind:src="pokemon3.ruta" alt="NaN">
  
      </div>
  
      <div v-if="mostraInicio">
  
          <p>{{ pokemonTexto1 }}</p>
  
          <p>{{ pokemonTexto2 }}</p>
  
          <p>{{ pokemonTexto3 }}</p>
  
      </div>
  
      <button v-on:click="jugar">Jugar</button>
  
    </div>
    <div v-if="mensajeGanador">
        <img class="imgGanador" src="../assets/congratulations.gif" alt="">
        <br>
        <p class="ganador">HAS GANADO CON UN PUNTAJE TOTAL DE {{ puntaje }}</p>
        <br>
        <button v-on:click="nuevoJuego">NUEVO JUEGO</button>

    </div>
    <div v-if="mensajePerdedor">
        <p class="perdedor">HAS PERDIDO CON 5 INTENTOS Y UN PUNTAJE DE {{ puntaje }}</p>
        <br>
        <button v-on:click="nuevoJuego">NUEVO JUEGO</button>
    </div>
  
  </template>
  
  
  
  <script>
  
  export default {
  
      data(){
  
          return {
  
              puntaje: 0,
  
              intento: 0,
  
              banderaJuego: true,
              mensajeGanador: false,
              mensajePerdedor: false,

  
              pokemonTexto1: 'xxxxxxxxxxxxxxx',
  
              pokemonTexto2: 'xxxxxxxxxxxxxxx',
  
              pokemonTexto3: 'xxxxxxxxxxxxxxx',
  
              pokemon1: {
  
                  ruta: 'https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg',
  
                  nombre: ''
  
              },
  
              pokemon2: {
  
                  ruta: 'https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg',
  
                  nombre: ''
  
              },
  
              pokemon3: {
  
                  ruta: 'https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg',
  
                  nombre: ''
  
              },
              mostraInicio : true
  
          }
  
      },
  
      methods: {
  
          async jugar(){
  
              const numAl1 = this.obtenerAleatorio(3)
  
              const numAl2 = this.obtenerAleatorio(3)
  
              const numAl3 = this.obtenerAleatorio(3)
  
              const vectorPlantilla = await this.construirPokemons()
  
              this.pokemon1 = vectorPlantilla[numAl1]
  
              this.pokemon2 = vectorPlantilla[numAl2]
  
              this.pokemon3 = vectorPlantilla[numAl3]
  
              this.pokemonTexto1 = this.pokemon1.nombre
  
              this.pokemonTexto2 = this.pokemon2.nombre
  
              this.pokemonTexto3 = this.pokemon3.nombre

              this.intento ++

              this.sumarIntentos()
              this.mensajesFinales()


  
          },

          sumarIntentos(){
            if(this.pokemonTexto1 == this.pokemonTexto2 && this.pokemonTexto2 == this.pokemonTexto3 ){
                this.puntaje = this.puntaje + 5
            }
            if ((this.pokemonTexto1==this.pokemonTexto2 || this.pokemonTexto1==this.pokemonTexto3) && this.pokemonTexto2 != this.pokemonTexto3){
                this.puntaje = this.puntaje + 2

            }
            if (this.pokemonTexto2==this.pokemonTexto3 && this.pokemonTexto1 != this.pokemonTexto3){
                this.puntaje = this.puntaje + 2

            }
            

          },

          mensajesFinales(){
            if(this.puntaje >= 10){
                this.mensajeGanador=true
                    this.mensajePerdedor=false
                    this.banderaJuego = false
            }
            else{
            if(this.intento == 5){
                this.banderaJuego = false
                if(this.puntaje >= 10  ){
                    this.mensajeGanador=true
                    this.mensajePerdedor=false
                    
                }else{
                    this.mensajePerdedor=true
                    this.mensajeGanador=false
                }
        }
    }

          },
  
          obtenerAleatorio(limite){
  
              return Math.floor(Math.random()*limite) + 1
  
          },
  
          async consumirAPI(id){
  
              const data = await fetch('https://pokeapi.co/api/v2/pokemon/'+ id).then((r)=>r.json())
  
              return data
  
          },
  
          definirPokemons(){
  
              const vectorIdPokemons = [10,19,30,40]
  
              return vectorIdPokemons
  
          },
  
          async construirPokemons(){
  
              const vectorObjetosPokemons = []
  
              const vector = this.definirPokemons()
  
              for(let i = 0; i<4; i++){
  
                  const idPokemon = vector[i]
  
                  const objetoPokemon = await this.construirObjetoPokemon(idPokemon)
  
                  vectorObjetosPokemons.unshift(objetoPokemon)
  
              }
  
              return vectorObjetosPokemons
  
          },
  
          async construirObjetoPokemon(id){
  
              const {name} = await this.consumirAPI(id)
  
              const objetoPkemon = {
  
                  ruta: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg',
  
                  nombre: name
  
              }
  
              return objetoPkemon
  
          },  
  
          nuevoJuego(){
            this.banderaJuego = true
            this.mensajeGanador = false
            this.mensajePerdedor = false
            this.puntaje = 0
            this.intento = 0
            this.pokemonTexto1 = "xxxxxxxxxxxxxxx"
            this.pokemonTexto2 = "xxxxxxxxxxxxxxx"
            this.pokemonTexto3 = "xxxxxxxxxxxxxxx"
            this.pokemon1.ruta =  "https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg"
            this.pokemon2.ruta =  "https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg"
            this.pokemon3.ruta =  "https://png.pngtree.com/thumb_back/fh260/background/20200821/pngtree-pure-black-dark-background-wallpaper-image_396553.jpg"

          }
  
      }
  
  }
  
  </script>
  
  
  
  <style>
  
  .imgPoke {
  
      margin: 0px 20px;
  
      width: 250px;
  
      height: 250px;
  
  }
  .imgGanador{
    width: 400px;
    height: 200px;
  }
  .ganador{
    color: blue;
  }

  .perdedor{
    color: red;
  }
  
  p {
  
      display: inline;
  
      margin: 15px 90px;
  
  }
  
  button {
  
      margin-top: 90px;
  
  }
  
  </style>