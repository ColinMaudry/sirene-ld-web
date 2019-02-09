<template>
  <div>
    <vuetable
      api-url="http://localhost:4444/api/decp/sources"
      :fields="fields"
      ref="vuetable"
      @vuetable:pagination-data="onPaginationData"
    ></vuetable>
    <vuetable-pagination ref="pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
  </div>
</template>


<script>
import Vuetable from "vuetable-2";
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
          title: "Page Web",
          callback: "toHref"
        }
      ]
    };
  },
  methods: {
    toHref(url) {
      return '<a target="_blank" href="' + url + '">' + url + "</a>";
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
};
</script>

<style scoped>
</style>
