<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="title has-text-centered">Увійти в особистий кабінет</div>
        <div class="field">
          <label class="label">Логін</label>
          <div class="control has-icons-left">
            <input class="input is-medium" type="text" placeholder="Логін" />
            <span class="icon is-left">
              <b-icon icon="account"></b-icon>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Пароль</label>
          <div class="control has-icons-left">
            <input class="input is-medium" type="password" placeholder="Пароль" />
            <span class="icon is-left">
              <b-icon icon="lock"></b-icon>
            </span>
          </div>
        </div>
        <div class="buttons">
          <b-button type="is-info" style="margin-top:1rem" expanded>Увійти</b-button>
        </div>
        <div class="suptitle has-text-centered">
          <router-link to="/registration">Зареєструватися</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
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