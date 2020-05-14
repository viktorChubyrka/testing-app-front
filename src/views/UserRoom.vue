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
        <b-tab-item icon="clipboard" label="Мої тести">
          <AdminTests />
        </b-tab-item>
        <b-tab-item icon="check" label="Результати опитувань">
          <TestResult />
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>
<script>
import AddFile from "../components/admin/AddFile.vue";
import CreateTest from "../components/admin/CreateTest.vue";
import TestResult from "../components/admin/TestResult.vue";
import AdminTests from "../components/admin/AdminTests.vue";

export default {
  components: { AddFile, CreateTest, TestResult, AdminTests },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("GET_CATEGORYS");
  },
};
</script>
<style scoped>
body,
html {
  height: 100%;
  margin: 0%;
  padding: 0%;
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
