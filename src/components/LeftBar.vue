<template>
  <!--left navigation start-->
  <aside class="float-navigation">
    <div class="nano">
      <div class="nano-content">
        <ul class="metisMenu nav" id="menu">
          <li class="nav-heading">
            <span>Navigation</span>
          </li>
          <li>
            <router-link to="/">
              <i class="icon-home"></i> Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="/presentation">
              <i class="icon-home"></i> Présentation
            </router-link>
          </li>
          <li>
            <router-link to="/decp">
              <i class="icon-home"></i> Marchés publics
            </router-link>
          </li>
        </ul>
        <!-- end list -->
      </div>
      <!--nano content-->
    </div>
    <!--nano scroll end-->
  </aside>
  <!--left navigation end-->
</template>

<script>
export default {};
</script>

<style scoped>
@import url("/css/metisMenu.min.css");
@import url("/css/simple-line-icons.css");
</style>
