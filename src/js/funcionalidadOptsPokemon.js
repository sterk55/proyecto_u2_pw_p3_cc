function obtenerAleatorio(tope){
    
    return Math.floor(Math.random() * tope + 1)
}

const consumirApi = (idPokemon) => {


}

const crearArregloPokemon = () =>{
    const arregloPokemonNumero = [obtenerAleatorio(600), obtenerAleatorio(600), obtenerAleatorio(600), obtenerAleatorio(600)]
    return arregloPokemonNumero
}