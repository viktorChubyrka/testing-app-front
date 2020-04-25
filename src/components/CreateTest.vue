<template>
  <div class="tile is-ancestor">
    <div class="tile is-6 is-vertical">
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
            <b-select type="is-info" expanded placeholder="Дисципліна">
              <option
                v-for="option in data"
                :value="option.id"
                :key="option.id"
              >{{ option.user.first_name }}</option>
            </b-select>
          </b-field>
        </div>
        <div class="column is-3 is-vcentered">
          <b-field label="К-ть тем">
            <b-numberinput controls-rounded v-model="themNumber"></b-numberinput>
          </b-field>
        </div>
      </div>
      <div class="columns">
        <div class="column is-11">
          <div v-for="i in themNumber" :key="i" class="columns">
            <div class="column is-9">
              <b-field :label="them(i)">
                <b-select expanded type="is-info" placeholder="Виберіть тему">
                  <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id"
                  >{{ option.user.first_name }}</option>
                </b-select>
              </b-field>
            </div>
            <div class="column">
              <b-field label="К-сть питань">
                <b-select expanded type="is-info" placeholder="0">
                  <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id"
                  >{{ option.user.first_name }}</option>
                </b-select>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tile is-6 is-vertical">
      <div class="columns">
        <div class="column is-8">
          <b-field label="Спеціальність">
            <b-select type="is-info" expanded placeholder="Спеціальність">
              <option
                v-for="option in data"
                :value="option.id"
                :key="option.id"
              >{{ option.user.first_name }}</option>
            </b-select>
          </b-field>
          <b-field label="E-mail студентів" :label-position="labelPosition">
            <b-input placeholder="Вводити через кому без пробілів" maxlength="500" type="textarea"></b-input>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="Курс">
            <b-select type="is-info" expanded placeholder="1">
              <option
                v-for="option in data"
                :value="option.id"
                :key="option.id"
              >{{ option.user.first_name }}</option>
            </b-select>
          </b-field>
          <div class="QR"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      themNumber: 0
    };
  },
  methods: {
    them: i => `Тема ${i}`
  }
};
</script>
<style >
.QR {
  margin: 15% auto;
  width: 40%;
  border: 1px solid black;
  height: 60%;
  background: black;
}
</style>