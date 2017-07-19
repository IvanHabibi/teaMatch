<template>
  <div id="app">
    <div class="container">


    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='css'>
@import './assets/dist/css/AdminLTE.min.css';
@import './assets/plugins/iCheck/square/blue.css';



.container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
