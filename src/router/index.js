import Vue from 'vue'
import Router from 'vue-router'
import PriceBit from '@/components/PriceComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PriceBit',
      component: PriceBit
    }
  ]
})
