<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="title has-text-centered">Створення обліковго запису</div>
        <div class="field">
          <label class="label">І'мя</label>
          <div class="control">
            <input class="input is-medium" type="text" placeholder="І'мя" />
          </div>
        </div>
        <div class="field">
          <label class="label">Прізвище</label>
          <div class="control">
            <input class="input is-medium" type="password" placeholder="Прізвище" />
          </div>
        </div>
        <div class="field">
          <label class="label">Логін</label>
          <div class="control">
            <input class="input is-medium" type="text" placeholder="Логін" />
          </div>
        </div>
        <div class="field">
          <label class="label">Пароль</label>
          <div class="control">
            <input class="input is-medium" type="password" placeholder="Пароль" />
          </div>
        </div>
        <div class="field">
          <label class="label">Повторіть пароль</label>
          <div class="control">
            <input class="input is-medium" type="password" placeholder="Повторіть пароль" />
          </div>
        </div>
        <div class="buttons">
          <b-button type="is-info" style="margin-top:1rem" expanded>Створити обліковий запис</b-button>
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