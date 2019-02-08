<template>
  <div>
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h4>Dashboard</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Répertoire SIRENE
            <small class="text-muted">au 4 janvier</small>
          </div>
          <div class="panel-body">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="widget bg-primary padding-0">
                <div class="row row-table">
                  <div class="col-xs-4 text-center pv-15 bg-light-dark">
                    <em class="icon-cloud-upload fa-3x"></em>
                  </div>
                  <div class="col-xs-8 pv-15 text-center">
                    <h2 class="mv-0">20 045 522</h2>
                    <div class="text-uppercase">unités légales</div>
                  </div>
                </div>
              </div>
              <!--end widget-->
            </div>
            <!--end col-->
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="widget bg-teal padding-0">
                <div class="row row-table">
                  <div class="col-xs-4 text-center pv-15 bg-light-dark">
                    <em class="icon-bag fa-3x"></em>
                  </div>
                  <div class="col-xs-8 pv-15 text-center">
                    <h2 class="mv-0">20 383 763</h2>
                    <div class="text-uppercase">établissements actifs</div>
                  </div>
                </div>
              </div>
              <!--end widget-->
            </div>

            <!-- <div class="col-lg-12 col-md-12 col-sm-12">
              <categories-unites-legales/>
            </div>-->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Graphe sireneLD
            <small class="text-muted">au 11 janvier</small>
          </div>
          <div class="panel-body">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="widget bg-primary padding-0">
                <div class="row row-table">
                  <div class="col-xs-4 text-center pv-15 bg-light-dark">
                    <em class="icon-cloud-upload fa-3x"></em>
                  </div>
                  <div class="col-xs-8 pv-15 text-center">
                    <h2 class="mv-0">1 069 725 246</h2>
                    <div class="text-uppercase">triplets</div>
                  </div>
                </div>
              </div>
              <!--end widget-->
            </div>
            <!--end col-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesUnitesLegales from "@/components/charts/CategoriesUnitesLegales.vue";
export default {
  components: {
    CategoriesUnitesLegales
  }
};
</script>

<style scoped>
</style>
