<template>
    <div>
  
  <img v-if="!showPokemon" class="ocultar-pokemon" :src="imgPokemon" alt="No hay">
  <img   :src="imgPokemon" alt="No hay">
</div>
</template>

<script>
export default {
    data(){
        return{
            
        };
    },
    props:{
        idPokemon:{
            type:Number,
            required:true
        },
        showPokemon:{
            type:Boolean,
            required:true,
            default:true
        }
    },
    computed:{
        imgPokemon(){
            return  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
        }
    }

}

</script>

<style>
    .ocultar-pokemon{
        filter: brightness(0);
        position: absolute;
    }
    img{
        
        height: 200px;
        -webkit-user-drag: none;

    }

</style>