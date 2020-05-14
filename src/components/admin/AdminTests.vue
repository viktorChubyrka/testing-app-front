<template>
  <div class="tile is-ancestor is-vertical">
    <Test :test="test" v-for="(test, i) in tests.data" :key="i" />
  </div>
</template>
<script>
import Test from "./Test.vue";

export default {
  components: { Test },
  data() {
    return {
      showDetailsIndex: null,
    };
  },
  created() {
    this.$store.dispatch("GET_TESTS");
  },
  computed: {
    tests() {
      return this.$store.getters.TESTS;
    },
  },
  methods: {
    showDetails(index) {
      if (this.showDetailsIndex == index) return true;
      else return false;
    },
  },
};
</script>
<style scoped>
.is-ancestor {
  margin: 1% !important;
}
</style>
