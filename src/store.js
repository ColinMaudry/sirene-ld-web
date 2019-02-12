import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      marches: []
    }
  },
  mutations: {
    MARCHES(state, marches) {
      state.data.marches = marches;
    }
  },
  actions: {
    storeMarches(store, marches) {
      store.commit("MARCHES", marches);
    }
  }
});
