import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const store = new Vuex.Store({
  state: {
    userId : null,
    username: null,
    token: null
  },
  mutations: { 
    setusername(state, username) {
      state.username = username;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    
  },
  getters: {

  },
});

export default store;
