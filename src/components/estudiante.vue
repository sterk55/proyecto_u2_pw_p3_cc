<template>
   <h1>Buscar Estudiante por ID</h1>
  <br>
  <h3>Ingrese el ID que quiera buscar</h3>
  <br>
  <input type="text" name="" id="" v-model="id">
  <br>
  <br>
  <button @click="buscar">Buscar</button>
<br>
  <table>
    <tr>
        <td><p>Nombre:</p></td>
        <td>{{ nombre }}</td>
    </tr>
    <tr>
        <td><p>Apellido:</p></td>
        <td>{{ apellido }}</td>

    </tr>
    <tr>
        <td><p>Salario:</p></td>
        <td>{{ salario }}</td>
    </tr>
    <tr>
        <td><p>Fecha de Nacimiento:</p></td>
        <td>{{ fechaNacimiento }}</td>
    </tr>
  </table>
</template>

<script>
export default {
    data(){
        return{
            nombre:"",
            apellido:"",
            salario: null,
            fechaNacimiento: null,
            id: 0

        }

    },
    methods:{
        async consumirAPI(id){
  
        const data = await fetch('http://localhost:8081/API/Matricula/V1/estudiantes/'+ id).then((r)=>r.json())

        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.salario = data.salario;
        this.fechaNacimiento = data.fechaNacimiento
        console.log("ss")

        },
        async buscar(){
            this.consumirAPI(this.id);
            console.log("ds")

        }
    }
}
</script>

<style>
table{

    margin: 0 auto;

}
</style>