<template>

  <div class="option-Container">
    <ul>
        <li v-for="poke in pokemons" :key="poke.id"></li>
      
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
  }
}
</script>

<style>
ul{
    list-style-type: none;
}
li{
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 5px;
    margin: 10px auto;
    
    cursor: pointer;

}


</style>