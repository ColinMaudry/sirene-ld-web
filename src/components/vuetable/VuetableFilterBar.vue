<template>
  <div class="filter-bar ui basic segment grid">
    <div class="ui form">
      <div class="inline field">
        <label>Recherche :</label>
        <input
          type="text"
          v-model="filterText"
          class="three wide column"
          @keyup.enter="doFilter"
          placeholder="name, nickname, or email"
        >
        <button class="ui primary button" @click="doFilter">Go</button>
        <button class="ui button" @click="resetFilter">Remettre à zéro</button>
      </div>
    </div>
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
