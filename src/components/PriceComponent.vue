<template>
    <div class = "priceBox">
        {{ bitcoin.description }}:
        <span class="lighten">
            <span v-html="bitcoin.symbol"></span>{{ bitcoin.rate_float | currencydecimal }}
        </span>
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
    }
    
}
</script>

<style>

</style>


