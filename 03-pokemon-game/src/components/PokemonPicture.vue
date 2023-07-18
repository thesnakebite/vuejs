<template>
    <div class="pokemon-container">
        <img v-if="!showPokemon"
             :src="imgSrc" 
             class="hidden-pokemon"
             alt="pokemon" />

        <img v-else 
             :src="imgSrc" 
             class="fade-in"
             alt="pokemon" />
    </div>
</template>

<script>

// Number, required

export default {

    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }

}
</script>

<style scope>
    .hidden-pokemon {
        filter: brightness(0);
    }

    /* Pokemon Picture */
    .pokemon-container {
        height: 200px;
    }

    .pokemon-container {
        height: 200px;
        display: flex;
        justify-content: center;
        position: relative;
    }
    
    img {
        height: 200px;
        position:absolute;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }

</style>