import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      marches: []
    },
    search: {
      filterText: ""
    }
  },
  getters: {
    getFilterText: state => {
      return state.search.filterText;
    }
  },
  mutations: {
    MARCHES(state, marches) {
      state.data.marches = marches;
    },
    FILTER_TEXT(state, filterText) {
      state.search.filterText = filterText;
    }
  },
  actions: {
    storeMarches(store, marches) {
      store.commit("MARCHES", marches);
    },
    setFilterText(store, filterText) {
      store.commit("FILTER_TEXT", filterText);
    },
    resetFilterText(store) {
      store.commit("FILTER_TEXT", "");
    }
  }
});
