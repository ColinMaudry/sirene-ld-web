<template>
  <div
    class="btn-group mr-4 fulltext"
    role="group"
    aria-label="Recherche de texte"
  >
    <div class="input-group">
      <input
        type="text"
        v-model="filterText"
        @keyup.enter="doFilter"
        placeholder="Recherche dans tous les marchés..."
        class="form-control"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="doFilter">Go</button>
    <button type="button" class="btn btn-primary" @click="resetFilter">
      Remise à zéro
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    ...mapActions(["setFilterText", "resetFilterText"]),
    doFilter() {
      this.setFilterText(this.filterText);
    },
    resetFilter() {
      this.resetFilterText();
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
  width: 260px;
}
</style>
