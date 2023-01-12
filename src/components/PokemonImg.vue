<template>
    <div>
  <h1>¿Que Pokemon es?</h1>
  <img v-if="true" class="ocultar-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg" alt="No hay">
  <img v-if="true"  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg" alt="No hay">
</div>
</template>

<script>
export default {
    data(){
        return{
            idPokemon:19,
            mostrarPokemon:false
        };
    }

}
</script>

<style>
    .ocultar-pokemon{
        filter: brightness(0);
        position: absolute;
    }
    img{
        
    
        -webkit-user-drag: none;

    }

</style>