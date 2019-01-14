<template>
  <div class="home">
    <top-bar/>
    <left-bar/>
    <main-content/>
    <bottom-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";
import LeftBar from "@/components/LeftBar.vue";
import MainContent from "@/components/MainContent.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: "home",
  components: {
    TopBar,
    LeftBar,
    MainContent,
    BottomBar
  }
};
</script>
