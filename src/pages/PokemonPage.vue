<template>
  <div v-if="mostrarEscena">
    <h1>Quien es?</h1>
  </div>
    <PokemonImg :showPokemon="mostrarPokemon" :idPokemon="PokeCorrecto.id" />
  <div v-if="mostrarEscena">
    <PokemonOpts :pokemons="pokemnArr" @selectionPokemon="validarRespuesta($event)"/>
  </div>
  <div>
    <h3>{{ mensaje }}</h3>
    <button v-on:click="reinciar">
      REINCIAR
    </button>

  </div>
</template>

<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PokemonOpts from "@/components/PokemonOpts.vue";
import obtenerPokemonsFachada from "../js/funcion.js";

export default {
  components: {
    PokemonImg,
    PokemonOpts,
  },
  data() {
    return {
      pokemnArr: [],
      mostrarPokemon: false,
      mostrarEscena: true,
      mensaje:"",
      PokeCorrecto: {
        nombre: "",
        id: 0,
      },
    };
  },
  mounted() {
    this.cargaPokemonInicial();
  },
  methods: {
    async cargaPokemonInicial() {
      console.log("va entrando");
      const vec = await obtenerPokemonsFachada();
      console.log(vec);
      console.log("Desde pagina principal");
      console.log("hola");
      console.log(vec);
      console.log("chao");
      this.pokemnArr = vec;
      const numero = Math.floor(Math.random() * 4);

      this.PokeCorrecto = this.pokemnArr[numero];
    },
    validarRespuesta(pokemonSeleccionadoHijo){
      console.log("pruebaEvento");
      console.log(pokemonSeleccionadoHijo);
      this.mostrarPokemon = true

      const idSeleccionado = pokemonSeleccionadoHijo

      if(idSeleccionado == this.PokeCorrecto.id){
        console.log("Correcto");
        this.mensaje = "HAS SELECCIONADO EL CORRECTO"
        this.mostrarEscena = false



      }else{
        console.log("Incorrecta");
        this.mensaje = "HAS SELECCIONADO EL INCORRECTO EL POKEMON CORRECTO ERA: "+ this.PokeCorrecto.nombre
        this.mostrarEscena = false

      }
    },
    reinciar(){
      this.mostrarPokemon = false
      this.cargaPokemonInicial()
      this.mensaje = ""
      this.mostrarEscena = true

    }
  },
};
</script>

<style>
</style>

<!--<template>
<h1 v-if="!pokemonCorrecto">Espere por favor...</h1>
<div v-if="pokemonCorrecto">
<h1>Quien es este Pokemon</h1>
<PokemonImg :idPokemon="pokemonCorrecto.id" :showPokemon="true" />
<PokemonOpts :pokemons="pokemonArr" /> 
</div>
</template>
<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PokemonOpts from "@/components/PokemonOpts.vue";
import obtenerPokemonsFachada from "../js/FuncionalidadOptsPokemon.js";
export default {
  components: {
    PokemonImg,
    PokemonOpts,
  },
  data() {
    return {
      pokemonArr: [],
      pokemonCorrecto: {
        nombre: "",
        id: 0,
      },
      mostarPokemon: false
    };
  },
  mounted() {
    // en los metodos del siclo de vida no hace falta poner el await    
    this.cargaPokemonInicial();
    },
    methods: {
      async cargaPokemonInicial() {
        const vec = await obtenerPokemonsFachada();
        console.log(vec);
        this.pokemonArr = vec;
        const numero = Math.floor(Math.random() * 4);
        this.pokemonCorrecto = this.pokemonArr[numero];
      },
    },
  };
</script>
<style>



</style>-->