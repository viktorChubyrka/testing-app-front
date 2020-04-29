<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="title has-text-centered">Увійти в особистий кабінет</div>
        <h2 style="color:#FF3300">{{ errorMassageL }}</h2>
        <div class="field">
          <label class="label">Логін</label>
          <div class="control has-icons-left">
            <input
              class="input is-medium"
              v-model="userToLogIn.login"
              type="text"
              placeholder="Логін"
            />
            <span class="icon is-left">
              <b-icon icon="account"></b-icon>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Пароль</label>
          <div class="control has-icons-left">
            <input
              class="input is-medium"
              v-model="userToLogIn.password"
              type="password"
              placeholder="Пароль"
            />
            <span class="icon is-left">
              <b-icon icon="lock"></b-icon>
            </span>
          </div>
        </div>
        <div class="buttons">
          <b-button
            :loading="isLoad"
            type="is-info"
            style="margin-top:1rem"
            @click="logIn()"
            expanded
            >Увійти</b-button
          >
        </div>
        {{ userToLogIn }}
        <div class="suptitle has-text-centered">
          <router-link to="/registration">Зареєструватися</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      userToLogIn: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      this.$store.commit("CHANGE_IS_LOAD");
      this.$store.dispatch("LOGIN_USER", {
        user: this.userToLogIn,
        context: this,
      });
    },
  },
  computed: {
    errorMassageL() {
      return this.$store.getters.LOGINERROR;
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
