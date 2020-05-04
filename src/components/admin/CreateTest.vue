<template>
  <div class="tile is-ancestor">
    <div class="tile is-8 is-vertical">
      <div class="columns">
        <div class="column is-11">
          <b-field label="Назва тесту">
            <b-input placeholder="Назва тесту" v-model="name"></b-input>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-8">
          <b-field label="Дисципліна">
            <b-select placeholder="Виберіть дисципліну" v-model="cat" type="is-info" expanded>
              <option
                v-for="(option, index) in categorys"
                :value="[option]"
                :key="index"
              >{{ option.category }}</option>
            </b-select>
          </b-field>
        </div>
      </div>
      <div v-if="cat" class="columns">
        <div class="column is-11">
          <div v-for="(item, i) in cat[0].test.topic" :key="i" class="columns">
            <div class="column is-8">
              <b-field label="Тема">
                <h1>{{ item }}</h1>
              </b-field>
            </div>
            <div class="column">
              <b-field :label="count(cat[0].test.count[i])">
                <b-numberinput
                  min="0"
                  :max="cat[0].test.count[i]"
                  controls-position="compact"
                  controls-rounded
                  v-model="qCount[i]"
                ></b-numberinput>
              </b-field>
            </div>
          </div>
          <div class="buttons">
            <b-button
              type="is-primary"
              style="margin-top:1rem"
              @click="createTest()"
              expanded
            >Завантажити файли</b-button>
            {{cat}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      cat: null,
      qCount: []
    };
  },
  methods: {
    count: el => `К-ть питань (${el})`,
    createTest() {
      let data = [];
      if (this.cat && this.qCount.length != 0) {
        for (let index = 0; index < this.qCount.length; index++) {
          data.push({
            count: this.qCount[index],
            fileName: this.cat[0].test.filesName[index]
          });
        }
      }
      this.$store.dispatch("CREATE_TEST", { topic: data, name: this.name });
      console.log(data);
    }
  },
  computed: {
    categorys() {
      return this.$store.getters.CATEGORYS;
    }
  }
};
</script>
<style>
.QR {
  margin: 15% auto;
  width: 40%;
  border: 1px solid black;
  height: 60%;
  background: black;
}
.is-ancestor {
  margin: 1% !important;
}
</style>
