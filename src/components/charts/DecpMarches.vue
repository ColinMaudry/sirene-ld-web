<template>
  <div class="panel panel-default">
    <div class="panel-heading">Attributions de marché (DECP)</div>
    <div class="panel-body">
      <div class="btn-toolbar justify-content-between">
        <vuetable-filter-bar></vuetable-filter-bar>
        <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
        <vuetable-pagination-info
          info-template="Résultats {from} à {to} sur {total}"
          ref="decpPaginationInfo"
          css="{infoClass:'form-control'}"
        ></vuetable-pagination-info>
      </div>
      <vuetable
        :api-url="apiServer + '/api/decp/marches'"
        :fields="fields"
        :sort-order="sortOrder"
        :multi-sort="false"
        :append-params="moreParams"
        ref="decpMarches"
        @vuetable:pagination-data="onPaginationData"
        detail-row-component="decp-marches-details"
        @vuetable:cell-clicked="onCellClicked"
      ></vuetable>
    </div>
  </div>
</template>

<script>
import Vuetable from "vuetable-2";
import axios from "axios";
import VuetableFilterBar from "../vuetable/VuetableFilterBar";
import VuetablePaginationInfo from "../vuetable/VuetablePaginationInfo";
import DecpMarchesDetails from "@/components/charts/DecpMarchesDetails.vue";
import Vue from "vue";
Vue.component("decp-marches-details", DecpMarchesDetails);

export default {
  components: {
    Vuetable,
    VuetablePagination: require("../vuetable/VuetablePaginationBootstrap.vue")
      .default,
    VuetableFilterBar,
    VuetablePaginationInfo
  },

  data() {
    return {
      fields: [
        { name: "id", title: "id" },
        {
          name: "acheteur.nom",
          title: "Acheteur",
          sortField: "acheteur.nom"
        },
        { name: "objet", dataClass: "objet" },
        {
          name: "dateNotification",
          title: "Notification",
          sortField: "dateNotification",
          callback: "formatDate"
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
    },
    moreParams() {
      var params = {
        text: this.$store.getters.getFilterText
      };
      return params;
    }
  },
  methods: {
    formatDate(date) {
      var options = { year: "numeric", month: "short", day: "numeric" };
      var jsDate = new Date(date.substring(0, 10));
      return jsDate.toLocaleDateString("fr-FR", options);
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.decpPaginationInfo.setPaginationData(paginationData);
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
      return filtered.length;
    },
    onCellClicked(data, field, event) {
      console.log("cellClicked: ", field.name);
      this.$refs.decpMarches.toggleDetailRow(data.id);
    }
  },
  watch: {
    // eslint-disable-next-line
    moreParams(newVal, oldVal) {
      this.$nextTick(() => {
        this.$refs.decpMarches.refresh();
      });
    }
  },
  mounted() {},
  created() {
    axios
      .get(this.apiServer + "/api/decp/marches")
      .then(response => {
        this.marches = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style>
td.objet {
  font-size: 0.8em;
  width: 50%;
}
.vuetable-pagination-info {
  float: right;
}

.vuetable tr:hover,
.vuetable-detail-row {
  background-color: rgb(22, 32, 47);
}

.vuetable-detail-row > * {
  transform: translateX(20px);
  color: #889;
}
</style>
