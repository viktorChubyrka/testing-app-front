<template>
  <section class="container-main">
    <div class="container is-fullheight">
      <section style="width:95%;margin: auto;padding-top:10%">
        <b-steps size="is-small" type="is-black">
          <b-step-item
            type="is-default"
            clickable
            :step="i+1"
            class="task"
            v-for="(task,i) in tasks"
            :key="i"
          >
            <h1 style="margin:2% 0;font-weight:bold">{{task.task}}</h1>
            <section>
              <div v-for="(ans,i) in task.anss" :key="i" class="field">
                <b-radio v-model="radio" :native-value="i">{{ans}}</b-radio>
              </div>
            </section>
          </b-step-item>
        </b-steps>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      radio: null,
      tasks: [
        {
          task:
            "askjdlLSKDHFLKSDHFLSKDHFLSDHFLKJADHFHAGDJFHGSFJDSHAGFJHSDGFJSHADGFLASDGFJSAGDFHGSDAJFGA",
          anss: [
            "dsjfhsdjkhfkjsdhfjksd",
            "dsjfhsdjkhfkjsdhfjksd",
            "dsjfhsdjkhfkjsdhfjksd",
            "dsjfhsdjkhfkjsdhfjksd"
          ]
        },
        {
          task:
            "askjdlLSKDHFLKSDHFLSKDHFLSDHFLKJADHFHAGDJFHGSFJDSHAGFJHSDGFJSHADGFLASDGFJSAGDFHGSDAJFGA",
          anss: [
            "dsjfhsdjkhfkjsdhfjksd",
            "dsjfhsdjkhfkjsdhfjksd",
            "dsjfhsdjkhfkjsdhfjksd",
            "dsjfhsdjkhfkjsdhfjksd"
          ]
        }
      ]
    };
  }
};
</script>
<style scoped >
body,
html {
  height: 100%;
}

.container-main {
  width: 100%;
  height: 100vh !important;
  background-color: rgba(216, 208, 208, 0.585);
}
.container {
  width: 80%;
  height: 100% !important;
  margin: auto;
  background-color: white;
}
.task {
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>