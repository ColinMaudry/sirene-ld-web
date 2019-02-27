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
          title: "",
          callback: "getBugUrl"
        },
        {
          name: "code",
          title: "",
          callback: "getDownloadUrl"
        },
        {
          name: "code",
          title: "Nombre de marchés",
          callback: "getNumMarchesPerSource"
        },
        {
          name: "lastDownload",
          title: "Mise à jour des données",
          callback: "formatDate"
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
    },
    formatDate(date) {
      var options = { year: "numeric", month: "short", day: "numeric" };
      var jsDate = new Date(date);
      return jsDate.toLocaleDateString("fr-FR", options);
    },
    getBugUrl(code) {
      var url =
        "https://github.com/ColinMaudry/decp-json/issues?q=is%3Aopen+is%3Aissue+label%3A" +
        code;
      return (
        '<a href="' +
        url +
        '" target="_blank" title="Bugs et tâches">Bugs et tâches</a>'
      );
    },
    getDownloadUrl(code) {
      var url = "/data/decp/" + code + ".json";
      var html =
        '<a href="' +
        url +
        '" target="_blank" title="Télécharger les données de cette source" class="download"><i class="icon-cloud-download download"></i></a>';
      return html;
    }
  }
};
</script>

<style>
.download {
  font-weight: bold;
  font-size: 1.3em;
  margin: 0 3px;
}
</style>
