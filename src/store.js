import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      marches: [],
      stats: [],
      lastStat: {}
    },
    search: {
      filterText: ""
    }
  },
  getters: {
    getFilterText: state => {
      return state.search.filterText;
    },
    getStats: state => {
      return state.data.stats;
    },
    getLastStat: state => {
      return state.data.lastStat;
    }
  },
  mutations: {
    MARCHES(state, marches) {
      state.data.marches = marches;
    },
    STATS(state, stats) {
      state.data.stats = stats;
    },
    LASTSTAT(state, lastStat) {
      state.data.lastStat = lastStat;
    },
    FILTER_TEXT(state, filterText) {
      state.search.filterText = filterText;
    }
  },
  actions: {
    storeMarches(store, marches) {
      store.commit("MARCHES", marches);
    },
    storeStats(store, stats) {
      var lastStatIndex = stats.length - 1;
      var lastStat = stats[lastStatIndex].sources;
      store.commit("LASTSTAT", lastStat);
    },
    setFilterText(store, filterText) {
      store.commit("FILTER_TEXT", filterText);
    },
    resetFilterText(store) {
      store.commit("FILTER_TEXT", "");
    }
  }
});
