<template>
  <div class="btn-group mr-4 fulltext" role="group" aria-label="Recherche de texte">
    <div class="input-group">
      <input
        type="text"
        v-model="searchText"
        @keyup.enter="doSearch"
        placeholder="SIREN, SIRET, nom d'entreprise..."
        class="form-control"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      >
    </div>
    <button type="button" class="btn btn-primary" @click="doSearch">Go</button>
  </div>
</template>

  <script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    ...mapActions(["setSearchText"]),
    doSearch() {
      this.setSearchText(this.searchText);
    }
  }
};
</script>
<style>
div.fulltext {
  margin-bottom: 20px;
  float: left;
}
.fulltext > .input-group > input {
  width: 300px;
}
</style>
