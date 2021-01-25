import { createStore } from 'vuex'

import item from "./modules/item";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    item
  },
  strict: debug
})
