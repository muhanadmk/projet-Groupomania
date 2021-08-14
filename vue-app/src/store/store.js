import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    userId : null,
    username: null,
    token: null
  },
  getters: {
    username: (state) =>{
      return state.username;
    }
  },
  actions: {
    username(context, username) {
      context.commit('username');
    }
  },
  mutations: { 
    username(state, username) {
      state.username = username;
    },
    // setToken(state, token) {
    //   state.token = token;
    // },
  },
 
 
});

export default store;
