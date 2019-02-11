<template>
  <div class="panel panel-default">
    <div class="panel-heading">Sources de données essentielles utilisées</div>
    <div class="panel-body">
      <vuetable
        :api-url="apiServer + '/api/decp/sources'"
        :fields="fields"
        ref="vuetable"
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
    </div>
    <div class="panel-footer">Voir aussi les sources identifiées mais pas encore intégrées
      <a
        href="https://github.com/ColinMaudry/decp-json#sources-de-donn%C3%A9es"
        target="_blank"
      >sur Github</a>
    </div>
  </div>
</template>


<script>
import Vuetable from "vuetable-2";
import axios from "axios";
//import VuetablePagination from "@/components/VueTablePagination/VuetablePagination";
export default {
  components: {
    Vuetable,
    VuetablePagination: require("../VueTablePagination/VuetablePagination.vue")
      .default
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
      marches: [],
      sourcesApi: this.$store.apiServer + "/api/decp/sources"
    };
  },
  computed: {
    apiServer() {
      return process.env.VUE_APP_API_SERVER;
    }
  },
  methods: {
    toHref(url) {
      return '<a target="_blank" href="' + url + "\">Plus d'infos</a>";
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
    getNumMarchesPerSource(value) {
      var filtered = this.marches.filter(function(marche) {
        return marche.source === value;
      });
      console.log;
      return filtered.length;
    }
  },
  created() {
    axios
      .get(this.apiServer + "/api/decp/marches")
      .then(response => {
        this.marches = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
</style>
