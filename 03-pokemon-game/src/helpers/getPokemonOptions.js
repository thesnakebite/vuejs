// Creamos un arreglo con los 650 pokemons
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( ( _ , index) => index + 1 )
}

// Aqui tomamos el arrglo y lo mezclamos
const getPokemonOptions = () =>{

    const mixedPokemons = getPokemons().sort( () => Math.random() -0.5 )
     // Mandamos llamar getPokemonsName, porque necesitamos los 4 nombres primeros de estos 4 pokemons
    getPokemonsNames(mixedPokemons.splice(0, 4)) 
}

// Mostramos los 4 primeros pokemons aleatorios
const getPokemonsNames = ( [a,b,c,d] = [] ) => {
    console.log(a,b,c,d)
}

export default getPokemonOptions