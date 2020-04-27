
  
  <template>
  <div class="tile is-ancestor">
    <div class="tile is-12 is-vertical">
      <div class="tile is-parent is-vertical">
        <div class="tile is-child is-12">
          <div class="columns">
            <div class="column is-4">
              <b-field label="Спеціальність">
                <b-select type="is-info" expanded placeholder="Спеціальність">
                  <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id"
                  >{{ option.user.first_name }}</option>
                </b-select>
              </b-field>
            </div>
            <div class="column is-3">
              <b-field label="Дисципліна">
                <b-select type="is-info" expanded placeholder="Дисципліна">
                  <option v-for="option in 2" :value="option" :key="option">{{ option }}</option>
                </b-select>
              </b-field>
            </div>
            <div class="column is-2">
              <b-field label="Курс">
                <b-select type="is-info" expanded placeholder="1">
                  <option v-for="option in 2" :value="option" :key="option">{{ option }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
        <div class="tile is-child is-12">
          <div class="columns">
            <div class="column is-6">
              <b-field label="Назва тесту">
                <b-select type="is-info" expanded placeholder="Назва тесту">
                  <option v-for="option in 2" :value="option" :key="option">{{ option }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child is-6">
          <b-table
            @select="func()"
            :data="users"
            :columns="columns"
            :selected.sync="select"
            focusable
          ></b-table>
        </div>
        <div class="tile is-child is-6">
          <div class="ansvers">
            <div
              :class="task.color?colors[1]:colors[0]"
              v-for="(task, index) in tasks"
              :key="index"
            >
              <h2>{{index+1}} {{task.task}}</h2>
              <h2>({{task.userAnsver}})</h2>
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
    const users = [
      {
        id: 1,
        name: "Петренко Петро",
        mark: 10
      },
      {
        id: 2,
        name: "Іваненко Іван",
        mark: 2
      }
    ];
    return {
      colors: ["red", "green"],
      tasks: [
        {
          count: "1",
          task: "How old are you?",
          userAnsver: "12",
          color: false
        },
        {
          count: "1",
          task: "How old are you?",
          userAnsver: "12",
          color: false
        },
        {
          count: "1",
          task: "How old are you?",
          userAnsver: "12",
          color: true
        }
      ],
      users,
      select: null,
      columns: [
        { field: "id", label: "ID" },
        { field: "name", label: "Прізвище Ім'я" },
        {
          field: "mark",
          label: "Оцінка",
          centered: true
        }
      ]
    };
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
<style >
.red {
  color: red;
}
.green {
  color: green;
}
.ansvers {
  margin: 0 3%;
}
</style>



