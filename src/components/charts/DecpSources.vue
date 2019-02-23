<template>
  <div class="panel panel-default">
    <div class="panel-heading">Sources de données essentielles utilisées</div>
    <div class="panel-body">
      <vuetable :api-url="apiServer + '/api/decp/sources'" :fields="fields" ref="decpSources"></vuetable>
    </div>
    <div class="panel-footer">
      Voir aussi les sources identifiées mais pas encore intégrées
      <a
        href="https://github.com/ColinMaudry/decp-json#sources-de-donn%C3%A9es"
        target="_blank"
      >sur Github</a>
    </div>
  </div>
</template>


<script>
import Vuetable from "vuetable-2";
export default {
  components: {
    Vuetable
  },

  data() {
    return {
      fields: [
        "description",
        {
          name: "url",
          title: "",
          callback: "toHref"
        },
        {
          name: "code",
          title: "Nombre de marchés",
          callback: "getNumMarchesPerSource"
        }
      ],
      sourcesApi: this.$store.apiServer + "/api/decp/sources"
    };
  },
  computed: {
    apiServer() {
      return process.env.VUE_APP_API_SERVER;
    },
    marches() {
      return this.$store.state.data.marches;
    }
  },
  methods: {
    toHref(url) {
      return '<a target="_blank" href="' + url + "\">Plus d'infos</a>";
    },
    getNumMarchesPerSource(value) {
      var filtered = this.marches.filter(function(marche) {
        return marche.source === value;
      });
      console.log;
      return filtered.length;
    }
  }
};
</script>

<style scoped>
</style>
