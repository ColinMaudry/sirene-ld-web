<template>
  <div class="QueryPage">
    <fieldset class="ldf-client">
      <ul>
        <li>
          <label>Choose datasources</label>
          <span class="details-toggle" title="Show date option"></span>
          <select class="datasources" multiple></select>
        </li>

        <li class="details">
          <label>Pick a date</label>
          <input class="datetime" type="date">
        </li>

        <li>
          <label>Type or pick a query</label>
          <select class="query"></select>
          <textarea class="queryText"></textarea>
        </li>

        <li>
          <button class="start">Execute query</button>
          <button class="stop" style="display:none">Stop execution</button>
          <span class="timing"></span>
        </li>

        <li>
          <label>Query results</label>
          <div class="results"></div>
        </li>

        <li>
          <label>Execution log</label>
          <pre class="log"></pre>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../../public/ldf-client/yasqe.css");
@import url("../../public/ldf-client/ldf-client.css");
.ldf-client,
.ldf-client * {
  max-width: 90%;
}

.ldf-client {
  margin-left: auto;
  margin-right: auto;
}
</style>
