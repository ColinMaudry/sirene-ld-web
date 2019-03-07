<template>
  <!-- eslint-disable -->
  <div class="btn-group mr-4" role="group">
    <ul class="pagination">
      <li :class="{'disabled': isOnFirstPage}">
        <a href @click.prevent="loadPage('prev')">
          <span>&laquo;</span>
        </a>
      </li>

      <template v-if="notEnoughPages">
        <li v-for="n in totalPage" :class="{'active': isCurrentPage(n)}">
          <a @click.prevent="loadPage(n)" v-html="n"></a>
        </li>
      </template>
      <template v-else>
        <li v-for="n in windowSize" :class="{'active': isCurrentPage(windowStart+n-1)}">
          <a @click.prevent="loadPage(windowStart+n-1)" v-html="windowStart+n-1"></a>
        </li>
      </template>

      <li :class="{'disabled': isOnLastPage}">
        <a href @click.prevent="loadPage('next')">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import VuetablePaginationMixin from "./VuetablePaginationMixin";
export default {
  mixins: [VuetablePaginationMixin]
};
</script>
<style>
.pagination {
  margin-top: 0px;
  margin-left: 50px;
}

.pagination li a {
  min-width: 50px;
  text-align: center;
}
</style>
