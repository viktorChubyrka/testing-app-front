<template>
  <section class="hero is-fullheight">
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
          <b-rate v-model="it" size="is-medium"></b-rate>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
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
        <b-upload v-model="dropFiles" multiple drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your files here or click to upload</p>
            </div>
          </section>
        </b-upload>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      it: 0,
      number: 0,
      dropFiles: []
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    }
  }
};
</script>
<style >
.hero-body {
  width: 40%;
  margin: auto;
}
</style>