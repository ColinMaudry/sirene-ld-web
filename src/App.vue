<template>
  <div id="app">
    <top-bar/>
    <left-bar/>
    <section class="main-content">
      <router-view/>
      <bottom-bar/>
    </section>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import LeftBar from "@/components/LeftBar.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: "home",
  components: {
    TopBar,
    LeftBar,
    BottomBar
  }
};
</script>

<style>
.bg-primary {
  background-color: #3978bf !important;
}

body {
  font-size: 16px;
}

.panel-heading {
  text-transform: none;
}

.panel-footer {
  font-size: 0.8em;
}
</style>
