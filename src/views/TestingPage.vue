<template>
  <section class="container-main">
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped >
body,
html {
  height: 100%;
}

.container-main {
  width: 100%;
  height: 100vh !important;
  background-color: rgba(216, 208, 208, 0.585);
}
.container {
  width: 80%;
  height: 100% !important;
  margin: auto;
  background-color: white;
}
.task {
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>