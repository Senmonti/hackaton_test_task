import { createStore } from 'vuex'
import axios from '../inc/axios';
import data from "@/inc/data";

export default createStore({
  state: {
    fileParse: undefined
  },
  mutations: {
    toFileParse(state, data) {
      state.fileParse = data
    }
  },
  actions: {
    readFile({ commit }) {
      console.log(data[data.length - 1]);
      commit('toFileParse', data);
    }
  },
  modules: {

  }
})
