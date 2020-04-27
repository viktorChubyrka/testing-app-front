<template>
  <section class="container-main">
    <div class="container is-fullheight">
      <b-tabs type="is-boxed" size="is-medium" expanded>
        <b-tab-item icon="file-plus" label="Додати новий файл">
          <AddFile />
        </b-tab-item>
        <b-tab-item icon="brain" label="Створити тест">
          <CreateTest />
        </b-tab-item>
        <b-tab-item icon="clipboard" label="Результати опитувань">
          <TestResult />
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>
<script>
import AddFile from "../components/AddFile.vue";
import CreateTest from "../components/CreateTest.vue";
import TestResult from "../components/TestResult.vue";

export default {
  components: { AddFile, CreateTest, TestResult }
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
</style>