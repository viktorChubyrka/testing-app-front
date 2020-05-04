<template>
  <div>
    <div class="card tile is-11 is-vertical">
      <div class="tile">
        <div class="tile is-vertical is-10">
          <h1>Назва тесту</h1>
          <h2>Дисципліна</h2>
        </div>
        <div class="tile is-2 is-vertical">
          <h3>5 клас</h3>
          <h3>10 завдань</h3>
          <div class="buttons">
            <b-button type="is-primary" @click="show=!show" style="margin-top:1rem">Перегляд завдань</b-button>
            <b-button type="is-primary" style="margin-top:1rem">Розіслати тест</b-button>
          </div>
        </div>
      </div>
      <div v-show="show" class="tile is-vertical">
        <div v-for="i in 20" :key="i">
          <h2></h2>
          <h3>asdasdad</h3>
          <h3>asdasdad</h3>
          <h3>asdasdad</h3>
          <h3>asdasdad</h3>
        </div>
        <div class="buttons">
          <b-button type="is-primary" style="margin-top:1rem">Відправити тест</b-button>
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