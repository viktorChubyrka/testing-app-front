<template>
  <div class="tile is-ancestor is-vertical">
    <Test :test="tests" v-for="i in 10" :key="i" />
  </div>
</template>
<script>
import Test from "./Test.vue";

export default {
  components: { Test },
  data() {
    return {
      showDetailsIndex: null,
      tests: {
        name: "skjhdsaj",
        category: "dsdsadas",
        class: 5,
        count: 10,
        tests: ["dsadsadas", "dsadsadas", "dsadsadas"]
      }
    };
  },
  methods: {
    showDetails(index) {
      if (this.showDetailsIndex == index) return true;
      else return false;
    }
  },
  computed: {}
};
</script>
<style scoped>
.is-ancestor {
  margin: 1% !important;
}
</style>
