import Vue from "vue";
import Vuex from "vuex";
import jsonld from "jsonld";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      marches: [],
      uniteLegale: {}
    },
    search: {
      filterText: ""
    },
    context: {
      sn: "https://sireneld.io/vocab/sirene#",
      sx: "https://sireneld.io/vocab/sirext#",
      label: "http://www.w3.org/2000/01/rdf-schema#label"
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
    },
    UNITE_LEGALE(state, uniteLegale) {
      state.data.uniteLegale = uniteLegale;
    }
  },
  actions: {
    storeMarches(store, marches) {
      store.commit("MARCHES", marches);
    },
    storeUniteLegale(store, uniteLegale) {
      store.commit("UNITE_LEGALE", uniteLegale);
    },
    setFilterText(store, filterText) {
      store.commit("FILTER_TEXT", filterText);
    },
    resetFilterText(store) {
      store.commit("FILTER_TEXT", "");
    },
    compactJsonld(store, info) {
      jsonld.compact(info.data, this.state.context, function(err, result) {
        store.commit(info.field, result);
      });
    }
  }
});
