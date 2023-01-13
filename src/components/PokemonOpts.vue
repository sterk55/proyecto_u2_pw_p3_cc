<template>

  <div class="option-Container">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>



  </div>
</template>

<script>
export default {


}
</script>

<style>
ul{
    list-style-type: none;
    padding-left: 0px;
}
li{
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 5px;
    margin: 10px auto;
    
    cursor: pointer;

}

li:hover{
  background-color: gray;
}


</style>