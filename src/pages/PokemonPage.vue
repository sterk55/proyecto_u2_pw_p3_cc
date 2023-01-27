<template>
  <h1 v-if="!PokeCorrecto">Espere Por Favor........</h1>
  <div v-if="PokeCorrecto">
    <h1>Quien es?</h1>
    <PokemonImg :showPokemon="true" :idPokemon="PokeCorrecto.id" />
    <PokemonOpts :pokemons="PokeCorrecto" />
  </div>
</template>

<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PokemonOpts from "@/components/PokemonOpts.vue";
import obtenerPokemonsFachada from "@/js/funcion.js";

export default {
  components: {
    PokemonImg,
    PokemonOpts,
  },
  data() {
    return {
      pokemnArr: [],
      PokeCorrecto: {
        nombre: "",
        id: 2,
      },
    };
  },
  mounted() {
    this.cargaPokemonInicial();
  },
  methods: {
    async cargaPokemonInicial() {
      const vec = await obtenerPokemonsFachada();
      console.log("Desde pagina principal");
      console.log(vec);
      this.pokemnArr = vec;
      const numero = Math.floor(Math.random() * 4);

      this.PokeCorrecto = this.pokemnArr[numero];
    },
  },
};
</script>

<style>
</style>