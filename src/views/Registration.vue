<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="title has-text-centered">Створення обліковго запису</div>
        <h2 style="color:#FF3300">{{ errorMassageR }}</h2>
        <div class="field">
          <label class="label">І'мя</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              placeholder="І'мя"
              v-model="newUser.firstName"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Прізвище</label>
          <div class="control">
            <input
              v-model="newUser.lastName"
              class="input is-medium"
              type="text"
              placeholder="Прізвище"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Логін</label>
          <div class="control">
            <input
              class="input is-medium"
              type="text"
              v-model="newUser.login"
              placeholder="Логін"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">E-mail</label>
          <div class="control">
            <input
              class="input is-medium"
              type="e-mail"
              v-model="newUser.Email"
              placeholder="ex@ex.com"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Пароль</label>
          <div class="control">
            <input
              v-model="newUser.password"
              class="input is-medium"
              type="password"
              placeholder="Пароль"
            />
          </div>
        </div>
        <div class="buttons">
          <b-button
            :loading="isLoad"
            type="is-info"
            @click="createNewUser()"
            style="margin-top:1rem"
            expanded
            >Створити обліковий запис</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        login: "",
        Email: "",
        password: "",
      },
    };
  },
  methods: {
    createNewUser() {
      this.$store.commit("CHANGE_IS_LOAD");
      this.$store.dispatch("CREATE_NEW_USER", {
        user: this.newUser,
        context: this,
      });
    },
  },
  computed: {
    errorMassageR() {
      return this.$store.getters.REGISTRERROR;
    },
    isLoad() {
      return this.$store.getters.IS_LOAD;
    },
  },
};
</script>
<style scoped>
.hero-body {
  width: 60%;
  margin: auto;
  background-color: white;
}
.hero {
  background-color: rgba(216, 208, 208, 0.585);
}
</style>
