<template>
    <div>
        <h2>{{ customTitle }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

        <!-- <button v-on:click="getIncrease">+1</button> -->
        <button @click="getIncrease">+1</button>
        <button @click="getDecrease">-1</button>
    </div>
   
</template>

<script>
    export default{
        props: ['title'],

        name:'Counter',
         
        data() {
            return {
                counter: 5
            }
        },

        methods: {
            getSquareValue(){
                return this.counter * this.counter
            },

            // increase
            getIncrease(){
                this.counter++
            },

            // decrease
            getDecrease(){
                this.counter--
            }

        },

        computed: {
            squareCounter(){
                return this.counter * this.counter
            },

            customTitle(){
               return this.title || 'Counter'
            }
        }
    } 

</script>

<style scoped>
    button {
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid greenyellow;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #5aa67b;
        transform: 0.3s ease-in-out;
    }
</style>