import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueMq from 'vue-mq'

import 'es6-promise/auto'
import {store} from './stores/Store.js';

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Shop from './views/Shop/Shop.vue'
import Product from './views/Shop/Product.vue'


Vue.use(VueMq, {
  breakpoints: {
    small: 450,
    medium: 1250,
    large: Infinity,
  }
})


Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},
  {path: '/electric-guitars', component: Shop},
  {path: '/acoustic-guitars', component: Shop},
  {path: '/amplifiers', component: Shop},
  {path: '/tools', component: Shop},
  {path: '/product', component: Product},
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
