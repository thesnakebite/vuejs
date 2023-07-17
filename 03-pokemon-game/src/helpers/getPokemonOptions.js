import pokemonApi from "@/api/pokemonApi"

// Creamos un arreglo con los 650 pokemons
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( ( _ , index) => index + 1 )
}

// Aqui tomamos el arrglo y lo mezclamos
const getPokemonOptions = async () =>{

    const mixedPokemons = getPokemons().sort( () => Math.random() -0.5 )
     // Mandamos llamar getPokemonsName, porque necesitamos los 4 nombres primeros de estos 4 pokemons
    const pokemons = await getPokemonsNames(mixedPokemons.splice(0, 4))

    return pokemons
}

// Mostramos los 4 primeros pokemons aleatorios
const getPokemonsNames = async ( [a,b,c,d] = [] ) => {
    // const resp = await pokemonApi.get(`/1`)
    // console.log(resp.data.name, resp.data.id)
    const promiseArr = [
        // Definimos las peticiones
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),

    ]

    const [p1, p2, p3, p4] = await Promise.all( promiseArr )

    return [
        { name: p1.data.name, id: p1.data.id},
        { name: p2.data.name, id: p2.data.id},
        { name: p3.data.name, id: p3.data.id},
        { name: p4.data.name, id: p4.data.id}
    ]
}

export default getPokemonOptions