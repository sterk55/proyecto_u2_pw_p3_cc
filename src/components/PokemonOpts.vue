<template>

  <div class="option-Container">
    <ul>
        <li v-for="poke in pokemons" :key="poke.id" @click="$emit('selectionPokemon', poke.id)">{{ poke.nombre }}</li>
      
    </ul>



  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      type: Array,
      required: true
    }
  },
  methods:{
    imprimir(){
      console.log("ty");
    }
  }
}
</script>

<style>
ul{
    list-style-type: none;
    padding: 0;
}
li{
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 5px;
    margin: 10PX auto;
    padding: 0 0;
    
    cursor: pointer;

}


</style>