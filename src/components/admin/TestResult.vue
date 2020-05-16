<template>
  <div class="tile is-ancestor">
    <div class="tile is-12 is-vertical">
      <div class="tile is-parent is-vertical">
        <div class="tile is-child is-12">
          <div class="columns">
            <div class="column is-6">
              <b-field label="Назва тесту">
                <b-select v-model="test" type="is-info" expanded placeholder="Назва тесту">
                  <option v-for="option in complitedTests" :value="option" :key="option">
                    {{
                    option.testName
                    }}
                  </option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <div v-if="test" class="tile is-parent">
        <div class="tile is-child is-6">
          <b-table
            @select="func()"
            :data="test.complitedByUser"
            :columns="columns"
            :selected.sync="select"
            focusable
          ></b-table>
        </div>
        <div v-if="select" class="tile is-child is-6">
          <div class="ansvers">
            <div class="green" v-for="(task, index) in select.tests" :key="index">
              <h2>{{ index + 1 }} {{ task.question }}</h2>
              <h2>({{ task.answer}})</h2>
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
      test: null,
      colors: ["red", "green"],

      select: null,
      columns: [
        { field: "userName", label: "Прізвище Ім'я" },
        {
          field: "mark",
          label: "Оцінка",
          centered: true
        }
      ]
    };
  },
  computed: {
    complitedTests() {
      return this.$store.getters.COMPLITED_TESTS;
    }
  },

  methods: {
    func() {
      {
        console.log(this.s);
      }
    }
  }
};
</script>
<style>
.green {
  color: green;
}
.ansvers {
  margin: 0 3%;
}
</style>
