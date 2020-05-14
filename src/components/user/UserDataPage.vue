<template>
  <div class="container is-fullheight">
    <div v-if="log == 1">
      <h1 style="text-align:center;font-size:40px">
        Ви вже прошли тест
      </h1>
    </div>
    <section v-else style="width:95%;margin: auto;padding-top:10%">
      <b-field label="Ім'я">
        <b-input
          placeholder="Ім'я"
          v-model="firstName"
          maxlength="40"
        ></b-input>
      </b-field>
      <b-field label="Прізвище">
        <b-input
          placeholder="Прізвище"
          v-model="lastName"
          maxlength="40"
        ></b-input>
      </b-field>
      <router-link to="/test/testing">
        <b-button type="is-primary" @click="saveData()" expanded
          >Почати тест</b-button
        >
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  created() {
    localStorage.setItem("token", this.$route.params.token);
    localStorage.setItem("id", this.$route.params.idT);
  },
  methods: {
    saveData() {
      localStorage.setItem("name", `${this.firstName} ${this.lastName}`);
    },
  },
  computed: {
    log() {
      return localStorage.getItem("log");
    },
  },
};
</script>
