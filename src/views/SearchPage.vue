<template>
  <div>
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h4>Recherche</h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="btn-toolbar justify-content-between">
          <vuetable-search-bar></vuetable-search-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuetableSearchBar from "@/components/mainSearch/VuetableFilterBar.vue";

export default {
  components: {
    VuetableSearchBar
  }
};
</script>

<style scoped></style>
