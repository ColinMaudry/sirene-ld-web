<template>
  <div @click="onClick">
    <div class="detailPane col-md-3">
      <p>
        <strong>Durée du marché (mois) :</strong>
        {{rowData.dureeMois}}
      </p>
      <p>
        <strong>Code CPV :</strong>
        {{rowData.codeCPV}}
      </p>
      <p>
        <strong>Source de données :</strong>
        {{rowData.source}}
      </p>
    </div>
    <div class="detailPane col-md-3">
      <p>
        <strong>Nature :</strong>
        {{rowData.nature}}
      </p>
      <p>
        <strong>Procédure :</strong>
        {{rowData.procedure}}
      </p>
      <p>
        <strong>Prix :</strong>
        {{rowData.formePrix}}
      </p>
    </div>
  </div>
</template>

  <script>
export default {
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  methods: {}
};
</script>

<style scoped>
.detailPane {
  float: left;
  border-right: 1px solid #444;
  padding: 0px 12px;
}
.detailPane:last-child {
  float: left;
  border-right: none;
  padding: 0px 12px;
}
</style>
