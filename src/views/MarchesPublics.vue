<template>
  <div>
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h4>Données essentielles de la commande publique (DECP)</h4>
          <p>
            Plus d'informations sur
            <a
              href="https://github.com/colinmaudry/decp-json"
            >la page de développement du projet</a>.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <decp-marches/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <decp-sources/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DecpSources from "@/components/charts/DecpSources.vue";
import DecpMarches from "@/components/charts/DecpMarches.vue";

export default {
  components: {
    DecpSources,
    DecpMarches
  }
};
</script>

<style scoped>
</style>
