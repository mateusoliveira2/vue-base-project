<template>
  <div id="app">
    <h1>Preços do Bitcoin</h1>
    <div class="list"> 
        <div class="bitcoin-item"  v-for="bitcoin in bitcoins" :key="bitcoin.code"> 
                <price-component  :bitcoin=bitcoin ></price-component> 
        </div>
    </div>
    <div class = "total"> 
        <span> {{situacao}}</span>
    </div>
  </div>
</template>

<script>
import PriceComponent from './components/PriceComponent'
import axios from 'axios'

export default {
    name: 'ListPrice',
        data() {
            return {
                bitcoins : []
            }
        },
        components: {
            PriceComponent
        },
        computed:{
            
        },
        mounted () {
            axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (
                this.bitcoins =  response.data.bpi
                
            ))
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
