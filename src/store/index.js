import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const Url = ENV["URL"];

export default new Vuex.Store({
  state: {
    isLoad: false,
    logInError: "",
    registrError: "",
    tests: [],
    userLogin: "",
    fileSendMessage: "",
    categorys: [],
    status: "",
    test: [],
  },
  getters: {
    LOGINERROR: (state) => {
      return state.logInError;
    },
    REGISTRERROR: (state) => {
      return state.registrError;
    },
    TESTS: (state) => {
      return state.tests;
    },
    USER_LOGIN: (state) => {
      return state.userLogin;
    },
    FILE_SEND_MESSAGE: (state) => {
      return state.fileSendMessage;
    },
    CATEGORYS: (state) => {
      return state.categorys;
    },
    IS_LOAD: (state) => {
      return state.isLoad;
    },
    STATUS: (state) => {
      return state.status;
    },
    TEST: (state) => {
      return state.test;
    },
  },
  mutations: {
    SET_LOGINERROR: (state, payload) => {
      state.logInError = payload;
    },
    SET_REGISTRERROR: (state, payload) => {
      state.registrError = payload;
    },
    SET_TESTS: (state, payload) => {
      state.tests = payload;
    },
    SET_USER_LOGIN: (state, payload) => {
      state.userLogin = payload;
    },
    SET_FILE_SEND_MESSAGE: (state, payload) => {
      state.fileSendMessage = payload;
    },
    SET_CATEGORYS: (state, payload) => {
      state.categorys = payload;
    },
    CHANGE_IS_LOAD: (state) => {
      state.isLoad = !state.isLoad;
    },
    SET_STATUS: (state, payload) => {
      state.status = payload;
    },
    SET_TEST: (state, payload) => {
      state.test = payload;
    },
  },
  actions: {
    CREATE_NEW_USER: async (state, payload) => {
      let data = await Axios.post(`${Url}api/user/registr`, payload.user);
      if (data.data.status == 200) {
        state.commit("SET_REGISTRERROR", "");
        payload.context.$router.push("/");
        state.commit("CHANGE_IS_LOAD");
      } else {
        state.commit("SET_REGISTRERROR", data.data.data.message);
        state.commit("CHANGE_IS_LOAD");
      }
    },
    LOGIN_USER: async (state, payload) => {
      let data = await Axios.post(`${Url}api/user/login`, payload.user);

      if (data.data.status == 200) {
        state.commit("SET_LOGINERROR", "");
        state.commit("SET_USER_LOGIN", data.data.data.user.login);
        localStorage.setItem("Login", data.data.data.user.login);
        payload.context.$router.push("/userroom");
        state.commit("CHANGE_IS_LOAD");
      } else {
        state.commit("SET_LOGINERROR", "Невірний логін або пароль!");
        state.commit("CHANGE_IS_LOAD");
      }
    },
    GET_CATEGORYS: async (state) => {
      let data = await Axios.post(`${Url}api/user/getcategory`, {
        login: localStorage.getItem("Login"),
      });
      state.commit("SET_CATEGORYS", data.data.data.tests);
    },
    SEND_FILE: async (state, payload) => {
      var formData = new FormData();
      formData.append("tasks", payload.file);
      formData.append("category", payload.category);
      formData.append("studentClass", payload.clas);
      formData.append("format", payload.file.name.split(".")[1]);
      formData.append("topic", payload.topic);
      formData.append("login", localStorage.getItem("Login"));
      let data = await Axios.post(`${Url}api/admintest/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      state.commit("SET_FILE_SEND_MESSAGE", data.data.message);
      setTimeout(state.commit("SET_FILE_SEND_MESSAGE", ""), 3000);
    },
    CREATE_TEST: async (state, payload) => {
      let data = await Axios.post(`${Url}api/admintest/createtest`, payload);
      state.commit("SET_STATUS", data.status);
    },
    GET_TESTS: async (context) => {
      let data = await Axios.post(`${Url}api/admintest/getalltest`, {
        login: localStorage.getItem("Login"),
      });
      context.commit("SET_TESTS", data);
    },
    SEND_TEST: async (state, payload) => {
      await Axios.post(`${Url}api/admintest/sendtest`, payload);
    },
    GET_TEST: async (context) => {
      let data = await Axios.get(
        `${Url}api/admintest/getTest/${localStorage.getItem("id")}`
      );
      context.commit("SET_TEST", data.data.data.test.test);
    },
    SEND_ANSWERS: async (context, payload) => {
      let data = await Axios.post(`${Url}api/admintest/verifytest`, payload);
      alert(`Вітаємо у вас ${data.data.data.bal} балів!`);
      localStorage.clear();
      localStorage.setItem("log", 1);
    },
  },
  modules: {},
});
