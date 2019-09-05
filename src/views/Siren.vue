<template>
  <div>
    <div v-if="uniteLegale">
      <div class="page-header">
        <div class="row">
          <div class="col-sm-6">
            <h4>
              {{
                uniteLegale["sn:denominationUniteLegale"] ||
                  uniteLegale["sn:prenomUsuelUniteLegale"] +
                    " " +
                    uniteLegale["sn:nomUniteLegale"]
              }}
              - {{ uniteLegale["sn:siren"] }}
            </h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              Informations sur l'unité légale
              <small class="text-muted"></small>
            </div>
            <div class="panel-body">
              <div class="col-lg-6 col-md-6 col-sm-12"></div>
              <!--end col-->
              <div class="col-lg-6 col-md-6 col-sm-12">
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
              Établissements
              <small class="text-muted">count</small>
            </div>
            <div class="panel-body">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <!--end widget-->
              </div>
              <!--end col-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      siren: this.$route.params.siren
    };
  },
  methods: {
    ...mapActions(["storeUniteLegale", "compactJsonld"])
  },
  computed: {
    sparqlEndpoint() {
      return process.env.VUE_APP_SPARQL_ENDPOINT;
    },
    uniteLegale() {
      return this.$store.state.data.uniteLegale;
    }
  },
  created() {
    axios
      .get("https://queery.link/api/graphs/sld-siren-view.jsonld")
      .then(response => {
        //this.storeUniteLegale(response.data);
        this.compactJsonld({ data: response.data, field: "UNITE_LEGALE" });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped></style>
