<template>
  <!--top bar start-->
  <div class="top-bar bg-primary">
    <!--by default top bar is dark, add .light-top-bar class to make it light-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6">
          <a href="/" class="admin-logo">
            <h1>
              <!-- <img src="images/logo-default.png" alt> -->
              sireneLD.io
              <span style="font-size:0.5em">{{ appVersion }}</span>
            </h1>
          </a>
          <div class="left-nav-toggle visible-xs visible-sm">
            <a href>
              <i class="glyphicon glyphicon-menu-hamburger"></i>
            </a>
          </div>
          <!--end nav toggle icon-->
        </div>
      </div>
    </div>
  </div>
  <!-- top bar end-->
</template>

<script>
export default {
  computed: {
    appVersion() {
      return process.env.VUE_APP_VERSION;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-logo h1 {
  text-transform: none;
  width: 250px;
}
</style>
