<template>
  <section class="hero">
    <div class="hero-head">
      <h2 style="color:#ff3300">{{ fileSendMessage }}</h2>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="field">
            <label class="label">Дисципліна</label>
            <div class="control">
              <input
                class="input is-medium"
                type="text"
                placeholder="Дисципліна"
                v-model="category"
              />
            </div>
          </div>
        </div>
        <div class="column is-5">
          <div class="field">
            <label class="label">Тема</label>
            <div class="control">
              <input
                class="input is-medium"
                v-model="topic"
                type="text"
                placeholder="Тема"
              />
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="field">
            <b-field label="Клас">
              <b-numberinput
                controls-position="compact"
                controls-rounded
                v-model="clas"
              ></b-numberinput>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container has-text-centered">
        <div class="tags">
          <span
            v-for="(file, index) in dropFiles"
            :key="index"
            class="tag is-primary"
          >
            {{ file.name }}
            <button
              class="delete is-small"
              type="button"
              @click="deleteDropFile(index)"
            ></button>
          </span>
        </div>
        <h5 v-for="(er, index) in errors" :key="index" style="color:red">
          {{ er }}
        </h5>
        <b-upload
          @input="checkFile()"
          v-model="dropFiles"
          multiple
          required
          drag-drop
        >
          <section expanded class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>
                Перетягніть свої файли сюди або натисніть щоб завантажити
                <br />(підтримуються файли формату .doc .tec .csv)
              </p>
            </div>
          </section>
        </b-upload>
        <div class="buttons">
          <b-button
            :disabled="disable"
            type="is-primary"
            style="margin-top:1rem"
            @click="sendFiles()"
            expanded
            >Завантажити файли</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      disable: false,
      topic: "",
      clas: 1,
      category: "",
      dropFiles: [],
      errors: [],
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
      this.errors.splice(index, 1);
    },
    checkFile() {
      let fileIndex = this.dropFiles.length;
      let splitedFileName = this.dropFiles[fileIndex - 1].name.split(".");
      let fileNameIndex = splitedFileName.length;
      if (
        splitedFileName[fileNameIndex - 1] == "doc" ||
        splitedFileName[fileNameIndex - 1] == "csv" ||
        splitedFileName[fileNameIndex - 1] == "tec"
      ) {
        this.disable = false;
        this.errors.push(null);
      } else {
        this.disable = true;
        this.errors.push("Формат файлу не підтримується");
      }
    },
    sendFiles() {
      this.$store.dispatch("SEND_FILE", {
        file: this.dropFiles[0],
        clas: this.clas,
        category: this.category,
        topic: this.topic,
      });
    },
  },
  computed: {
    fileSendMessage() {
      return this.$store.getters.FILE_SEND_MESSAGE;
    },
  },
};
</script>
<style>
.container {
  margin-top: 2% !important;
}
</style>
