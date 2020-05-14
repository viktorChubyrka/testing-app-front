<template>
  <div class="container is-fullheight">
    <div v-if="log == 1">
      <h1 style="text-align:center;font-size:40px">
        Ви вже прошли тест
      </h1>
    </div>
    <section v-else style="width:95%;margin: auto;padding-top:10%">
      <b-steps size="is-small" type="is-black">
        <b-step-item
          type="is-default"
          clickable
          :step="index + 1"
          class="task"
          v-for="(task, index) in tests"
          :key="index"
        >
          <h1 style="margin:2% 0;font-weight:bold">{{ task.question }}</h1>
          <section>
            <div v-for="(ans, i) in task.answers" :key="i" class="field">
              <b-radio v-model="radio[index]" :native-value="i">{{
                ans
              }}</b-radio>
            </div>
          </section>
        </b-step-item>
        <b-step-item type="is-default" class="task">
          <div class="buttons">
            <b-button
              type="is-primary"
              style="margin-top:1rem"
              @click="finishTest()"
              expanded
              >Завершити тест</b-button
            >
          </div>
        </b-step-item>
      </b-steps>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: [],
    };
  },
  methods: {
    finishTest() {
      let data = [];
      for (let index = 0; index < this.radio.length; index++) {
        data.push({
          question: this.tests[index].question,
          answer: this.tests[index].answers[this.radio[index]],
        });
      }
      this.$store.dispatch("SEND_ANSWERS", {
        test: data,
        id: localStorage.getItem("id"),
        name: localStorage.getItem("name"),
      });
    },
  },
  created() {
    this.$store.dispatch("GET_TEST");
  },
  computed: {
    tests() {
      return this.$store.getters.TEST;
    },
    log() {
      return localStorage.getItem("log");
    },
  },
};
</script>
<style scoped>
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
