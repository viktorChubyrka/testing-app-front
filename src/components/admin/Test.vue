<template>
  <div>
    <div class="card tile is-11 is-vertical">
      <div class="tile">
        <div class="tile is-vertical is-10">
          <h1>{{test.name}}</h1>
          <h2>{{test.category}}</h2>
        </div>
        <div class="tile is-2 is-vertical">
          <h3>{{test.class}} клас</h3>
          <h3>{{test.count}} завдань</h3>
          <div class="buttons">
            <b-button
              type="is-primary"
              v-show="!show"
              @click="show=!show"
              style="margin-top:1rem"
            >Перегляд завдань</b-button>
            <b-button
              v-show="!show"
              @click="prompt()"
              type="is-primary"
              style="margin-top:1rem"
            >Відправити тест</b-button>
          </div>
        </div>
      </div>
      <div v-show="show" class="tile is-vertical">
        <div v-for="(q,index) in test.qest" :key="index">
          <h2>{{q[0]}}</h2>
          <h3 v-for="(item,index) in q[1]" :key="index">{{item}}</h3>
        </div>
        <div class="buttons">
          <b-button type="is-primary" @click="prompt()" style="margin-top:1rem">Відправити тест</b-button>
          <b-button @click="show=!show" type="is-primary" style="margin-top:1rem">Закрити завдання</b-button>
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
      show: false
    };
  },
  methods: {
    prompt() {
      this.$buefy.dialog.prompt({
        title: "Відправка тестування",
        message: `<h2 style="font-weight:bold;font-size:20px;margin:0,padding:0">${this.test.category}</h2> <h2> ${this.test.name}</h2>`,
        inputAttrs: {
          placeholder: "email1@email.com,email2@email.com,email3@email.com",
          maxlength: 500
        },

        trapFocus: true,
        onConfirm: () => {
          setTimeout(() => {
            console.log("ok");
          }, 2000);
          this.$buefy.toast.open(`Тест відправлено успішно!`);
        }
      });
    }
  }
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