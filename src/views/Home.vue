<template>
  <div class="home">
    <top-bar/>
    <left-bar/>
    <main-content/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";
import LeftBar from "@/components/LeftBar.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  name: "home",
  components: {
    TopBar,
    LeftBar,
    MainContent
  }
};
</script>
