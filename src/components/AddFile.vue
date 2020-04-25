<template>
  <section class="hero">
    <div class="hero-head">
      <div class="columns is-vcentered">
        <div class="column">
          <div class="field">
            <label class="label">Дисципліна</label>
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Дисципліна" />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Тема</label>
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Тема" />
            </div>
          </div>
        </div>
        <div class="column is-vcentered">
          <label class="label">Рівень складності</label>
          <b-rate v-model="rate" size="is-medium"></b-rate>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container has-text-centered">
        <div class="tags">
          <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
            {{file.name}}
            <button
              class="delete is-small"
              type="button"
              @click="deleteDropFile(index)"
            ></button>
          </span>
        </div>
        <h5 v-for="(er,index) in errors" :key="index" style="color:red">{{er}}</h5>
        <b-upload @input="checkFile()" v-model="dropFiles" multiple required drag-drop>
          <section expanded class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>
                Перетягніть свої файли сюди або натисніть щоб завантажити
                <br />(підтримуються файли .txt .csv .xls)
              </p>
            </div>
          </section>
        </b-upload>
        <div class="buttons">
          <b-button type="is-primary" style="margin-top:1rem" expanded>Завантажити файли</b-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      rate: 1,
      number: 0,
      dropFiles: [],
      errors: []
    };
  },
  methods: {
    deleteDropFile(index) {
      console.log(this.dropFiles[0]);
      this.dropFiles.splice(index, 1);
      this.errors.splice(index, 1);
    },
    checkFile() {
      console.log(this.errors);
      let fileIndex = this.dropFiles.length;
      let splitedFileName = this.dropFiles[fileIndex - 1].name.split(".");
      let fileNameIndex = splitedFileName.length;
      if (splitedFileName[fileNameIndex - 1] == "txt") {
        this.errors.push("Формат файлу не підтримується");
      } else {
        this.errors.push(null);
      }
    }
  }
};
</script>
<style >
.container {
  margin-top: 2%;
}
</style>