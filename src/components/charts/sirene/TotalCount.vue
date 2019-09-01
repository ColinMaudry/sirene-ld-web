<template>
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
              <div class="text-uppercase">unités légales actives</div>
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
      <p>
        Une unité légale, identifiée par un numéro SIREN à 9 chiffres, est une
        entité communément appelée "entreprise" ou "organisation". Elle regroupe
        plusieurs implantations physiques, identifiés par un numéro SIRET à 14
        chiffres : les établissements.
      </p>

      <!-- <div class="col-lg-12 col-md-12 col-sm-12">
              <categories-unites-legales/>
      </div>-->
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  // created() {
  //   const query = encodeURI("select");
  //   axios
  //     .get(this.triplestoreServer + "/sirene/sparql?query=")
  //     .then(response => {
  //       this.marches = response.data;
  //     })
  //     .catch(error => {
  //       console.log(error.response);
  //     });
  // }
};
</script>

<style scoped></style>
