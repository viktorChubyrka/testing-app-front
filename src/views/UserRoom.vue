<template>
  <section class="container-main">
    <div class="container is-fullheight">
      <b-tabs type="is-boxed" size="is-medium" expanded>
        <b-tab-item icon="file-plus" label="Додати новий файл">
          <AddFile />
        </b-tab-item>
        <b-tab-item icon="brain" label="Створити тест"></b-tab-item>
        <b-tab-item icon="clipboard" label="Результати опитувань"></b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>
<script>
import AddFile from "../components/AddFile.vue";

export default {
  components: { AddFile }
};
</script>
<style scoped >
.container-main {
  width: 100%;

  background-color: rgba(216, 208, 208, 0.585);
}
.container {
  width: 80%;
  margin: auto;
  background-color: white;
}
</style>