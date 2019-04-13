<template>
    <div @click="incrementar" class = "priceBox">
        <div class="descri">
            <span>{{ bitcoin.description }}:</span> 
            <span v-html="bitcoin.symbol"></span> {{bitcoin.rate_float | currencydecimal }} 
        </div>
        <div>
            {{exemploDeState}}
         </div> 
    </div>
   
</template>

<script>
export default {
    name: 'PriceComponent',
    props: {
      bitcoin: Object
    }, 
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    },
    methods:{
         incrementar(){
                this.$store.commit('INCREMENTAR')
        }
    },
    computed: {
        exemploDeState: function(){
            return `${this.$store.state.count}`
        }
    }
    
}
</script>

<style>

.priceBox{
    position: center;
    display: grid;
    align-items: center;
    border: 0.1em solid #242B3A;
    border-radius: 1.5em; 
    background-color: #242B3A;
    color: #FFFFFF;
    padding: 1em 2em;
    margin: 0.5em;
    width: 15em;
    height: 2em;
}

</style>


