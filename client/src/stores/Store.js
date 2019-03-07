import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    toggleDrawer (state, value) {
      state.drawer = value

    }
  }
})