<template>
  <div class="categories">
    <vue-c3 :handler="handler"></vue-c3>
  </div>
</template>

<script>
import Vue from "vue";
import VueC3 from "vue-c3";
export default {
  components: {
    VueC3
  },
  data() {
    return {
      handler: new Vue()
    };
  },
  mounted() {
    const options = {
      data: {
        url: "/data/sirene/categories-unites-legales.csv",
        type: "pie"
      }
    };
    this.handler.$emit("init", options);
  }
};
</script>

<style scoped>
.categories {
  height: 150px;
}
</style>
