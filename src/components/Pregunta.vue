<template>
  <h1>Pregunta</h1>
  <img v-if="img" v-bind:src="img" alt="No se puede visualizar">
  <div class="fondo-dark"></div>
  <div class="container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda terminar con '?' al final de tu pregunta</p>
    <div>
        <h2>{{question}}</h2>
        <h1>{{respuesta}}</h1>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            question: '',
            respuesta:null,
            img:null,
        }
    },
    watch:{
        question(value, oldValue){
        if(!value.includes('?')) return;
            console.log("vamos a consumir el API")
            this.consumirAPI()
        }
    },
    methods:{
        async consumirAPI(){
            this.respuesta='Pensando.'
            const{answer, forced, image}= await fetch('https://yesno.wtf/api').then(r=>r.json())
        
            console.log(answer, forced, image)
            this.respuesta = answer
            this.img = image
        }

    },
    mounted(){
        console.log("Mi componente se corrio")
    }
}
</script>

<style>
    img, .fondo-dark{
        height: 100vh;
        width: 100vw;
        position: fixed;
        left: 0px;
        top: 0px;
    }
    .fondo-dark{
        background-color: rgb(0, 0, 0, 0.8);
    }
    input{
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    p{
        color: rgb(255, 255, 255);
        font-size: 20px;
        margin-top: 0px;
    }
    h1,h2 {
        color: rgb(255, 255, 255);
    }
    h2{
        margin-top: 150px;
    }
    .container{
        position: relative;
        z-index: 99;
    }
</style>