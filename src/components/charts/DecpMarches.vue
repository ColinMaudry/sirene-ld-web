<template>
  <div class="panel panel-default">
    <div class="panel-heading">Attributions de marché (DECP)</div>
    <div class="panel-body">
      <vuetable
        :api-url="apiServer + '/api/decp/marches'"
        :fields="fields"
        :sort-order="sortOrder"
        :multi-sort="false"
        ref="decpMarches"
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
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
import axios from "axios";
export default {
  components: {
    Vuetable,
    VuetablePagination: require("../VueTablePagination/VuetablePagination.vue")
      .default
  },

  data() {
    return {
      fields: [
        "id",
        {
          name: "acheteur.nom",
          title: "Acheteur",
          sortField: "acheteur.nom"
        },
        "objet",
        {
          name: "dateNotification",
          title: "Date de notification",
          sortField: "dateNotification"
        },
        { name: "montant", sortField: "montant" }
      ],
      sortOrder: [{ field: "dateNotification", direction: "desc" }],
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
      this.$refs.decpMarches.changePage(page);
    },
    getSortParam: function(sortOrder) {
      return sortOrder
        .map(function(sort) {
          return (sort.direction === "desc" ? "-" : "") + sort.field;
        })
        .join(",");
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
