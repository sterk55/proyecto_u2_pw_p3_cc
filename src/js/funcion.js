

const obtenerPokemon = async () => {
    console.log("Calculo de Aleatorio")
    obtenerAleatorio(1,5)
    console.log(obtenerAleatorio(1,5))
    const vec = obtenerVectorNumerico()
    const vecNombres= await obtenerVectorNombres(vec)
    console.table(vecNombres)
    return vecNombres
}

const obtenerVectorNombres= async ([p1, p2, p3, p4]=[])=>{
    console.log("transformando a nombres")
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    const nombrep1 = await obtenerNombreApi(p1)
    const nombrep2 = await obtenerNombreApi(p2)
    const nombrep3 = await obtenerNombreApi(p3)
    const nombrep4 = await obtenerNombreApi(p4)

    const vecNombres=[{
        nombre:nombrep1,
        id:p1    
    }, 
    {
        nombre:nombrep2,
        id:p2    
    },  {
        nombre:nombrep3,
        id:p3    
    }, {
        nombre:nombrep4,
        id:p4    
    }, 
]
    return vecNombres

}

const  obtenerNombreApi= async (id)=>{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json())
    return data.name
}

const obtenerVectorNumerico=()=>{
    const arreglo = [obtenerAleatorio(1,600),obtenerAleatorio(1,600),obtenerAleatorio(1,600),obtenerAleatorio(1,600)]
    return arreglo

}

function obtenerAleatorio(min, max){
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const obtenerPokemonsFachada=async()=>{
    console.log("Entra");
    return await obtenerPokemon()
    
}

export default obtenerPokemonsFachada