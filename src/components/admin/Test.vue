<template>
  <div>
    <div class="card tile is-11 is-vertical">
      <div class="tile">
        <div class="tile is-vertical is-10">
          <h1>{{ test.nameTest }}</h1>
        </div>
        <div class="tile is-2 is-vertical">
          <div class="buttons">
            <b-button
              type="is-primary"
              v-show="!show"
              @click="show = !show"
              style="margin-top:1rem"
              >Перегляд завдань</b-button
            >
            <b-button
              v-show="!show"
              @click="prompt()"
              type="is-primary"
              style="margin-top:1rem"
              >Відправити тест</b-button
            >
          </div>
        </div>
      </div>
      <div v-show="show" class="tile is-vertical">
        <div v-for="(q, index) in test.test" :key="index">
          <h2>{{ q.question }}</h2>
          <h3 v-for="(item, index) in q.answers" :key="index">{{ item }}</h3>
        </div>
        <div class="buttons">
          <b-button type="is-primary" @click="prompt()" style="margin-top:1rem"
            >Відправити тест</b-button
          >
          <b-button
            @click="show = !show"
            type="is-primary"
            style="margin-top:1rem"
            >Закрити завдання</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Test",
  props: ["test"],
  data() {
    return {
      show: false,
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    prompt() {
      this.$buefy.dialog.prompt({
        title: "Відправка тестування",
        message: `<h2 style="font-weight:bold;font-size:20px;margin:0,padding:0">${this.test.nameTest}</h2>`,
        inputAttrs: {
          size: "50",
          placeholder: "email1@email.com,email2@email.com,email3@email.com",
          maxlength: 500,
        },

        trapFocus: true,
        onConfirm: (value) => {
          const users = value.split(",");
          this.$store.dispatch("SEND_TEST", {
            users: users,
            testId: this.test._id,
            login: localStorage.getItem("Login"),
          });
          this.$buefy.toast.open(`Тест відправлено успішно!`);
        },
      });
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 20px;
  background: rgba(128, 128, 128, 0.17);
  padding: 2%;
  margin: 2%;
}
h1 {
  font-size: 4vh;
  font-weight: bold;
}
h2 {
  font-size: 3vh;
  font-weight: 700;
}
h3 {
  font-size: 2vh;
  font-weight: 700;
}
</style>
