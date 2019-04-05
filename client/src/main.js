import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueMq from 'vue-mq'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'es6-promise/auto'
import { store } from './stores/Store.js';

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Shop from './views/Shop/Shop.vue'
import Product from './views/Shop/Product.vue'
import HomeCarousel from './components/HomeCarousel.vue';


Vue.use(VueAxios, axios)


Vue.use(VueMq, {
  breakpoints: {
    small: 550,
    mediumSmall: 900,
    medium: 1250,
    large: Infinity,
  }
})


Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  //{path: '/', component: Home},
  { path: '/', components: { NoGridBefore: HomeCarousel, default: Home } },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/electric-guitars*', name: "electric-guitars", component: Shop, props: { shopSelection: 'electric-guitars' } },
  { path: '/acoustic-guitars*', name: "acoustic-guitars", component: Shop, props: { shopSelection: 'acoustic-guitars' } },
  { path: '/amplifiers*', name: "amplifiers", component: Shop, props: { shopSelection: 'amplifiers' } },
  { path: '/tools*', name: "tools", component: Shop, props: { shopSelection: 'tools' } },
  { path: '/product', name: "product", component: Product },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
