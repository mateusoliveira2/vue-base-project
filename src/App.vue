<template>
  <div id="app">
    <h1>Preços do Bitcoin</h1>
    <div class="list"> 
        <div class="bitcoin-item"  v-for="bitcoin in bitcoins" :key="bitcoin.code"> 
                <price-component  :bitcoin=bitcoin ></price-component> 
        </div>
    </div>
    <div > 

            {{numCliks}}
    </div>
  </div>
</template>

<script>
import PriceComponent from './components/PriceComponent'
import axios from 'axios'
import store from './store/store'

export default {
    store,
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
            numCliks : function(){
                return `${this.$store.state.count}`
            }
        }, 
        methods: {
            incrementar(){
                this.$store.commit('INCREMENTAR')
            }
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
  text-align: center;
  width: max-content;
  height:max-content;
  background-color: #99f1ac;
  margin-top: 60px;
}
</style>
