<template>
    <div>
         <h2>Counter</h2>
        <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>


    </div>
   
</template>

<script>
    export default{
        name:'Counter',
         
        data() {
            return {
                counter: 5
            }
        },

        methods: {
            getSquareValue(){
                console.log('getSquareValue')
                return this.counter * this.counter
            }
        },
        // Las propiedades computadas se guardan en el caché
        // lo cuál ayuda en el proceso, obtenemos el mismo resultado
        // pero solo se llamo una sola vez, esa es la principal diferencia.
        computed: {
            squareCounter(){
                console.log('computed squareCounter')
                return this.counter * this.counter
            }
        }
    } 

</script>

<style scoped>

</style>