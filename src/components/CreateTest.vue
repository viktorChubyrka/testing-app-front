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
            <b-select v-model="cat" type="is-info" expanded>
              <option
                v-for="(option, index) in categorys"
                :value="[index, option.category]"
                :key="index"
                >{{ option.category }}</option
              >
            </b-select>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-11">
          <div
            v-for="(item, i) in categorys[cat[0]].test.topic"
            :key="i"
            class="columns"
          >
            <div class="column is-8">
              <b-field label="Тема">
                <h1>{{ item }}</h1>
              </b-field>
            </div>
            <div class="column">
              <b-field :label="count(+categorys[cat[0]].test.count[i])">
                <b-numberinput
                  min="0"
                  :max="+categorys[cat[0]].test.count[i]"
                  controls-position="compact"
                  controls-rounded
                  v-model="qCount[i]"
                ></b-numberinput>
              </b-field>
            </div>
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
      themNumber: 0,
      cat: [0, "Виберіть дисципліну"],
      thema: [0, "Виберіть тему"],
      qCount: [],
    };
  },
  methods: {
    count: (el) => `К-ть питань (${el})`,
  },
  computed: {
    categorys() {
      return this.$store.getters.CATEGORYS;
    },
  },
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
