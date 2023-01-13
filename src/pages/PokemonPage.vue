<template>
    <h1>¿Que Pokemon es?</h1>
  <PokemonImg :idPokemon="99" :showPokemon="false"/>
  <PokemonOpts/>
</template>

<script>
    import PokemonImg from '@/components/PokemonImg.vue';
    import PokemonOpts from '@/components/PokemonOpts.vue';

    export default{
        components:{
            PokemonImg,
            PokemonOpts
        }
    }



</script>

<style>

</style>