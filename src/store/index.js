import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const Url = "http://4b74929a.ngrok.io/";

export default new Vuex.Store({
  state: {
    isLoad: false,
    logInError: "",
    registrError: "",
    tests: [],
    userLogin: "",
    fileSendMessage: "",
    categorys: [],
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
        state.commit("SET_TESTS", data.data.data.user.tests);
        state.commit("SET_LOGINERROR", "");
        state.commit("SET_USER_LOGIN", data.data.data.user.login);
        payload.context.$router.push("/userroom");
        state.commit("CHANGE_IS_LOAD");
      } else {
        state.commit("SET_LOGINERROR", "Невірний логін або пароль!");
        state.commit("CHANGE_IS_LOAD");
      }
    },
    GET_CATEGORYS: async (state) => {
      let data = await Axios.post(
        `${Url}api/user/getcategory`,
        state.getters.USER_LOGIN
      );
      console.log(data);
    },
    SEND_FILE: async (state, payload) => {
      var formData = new FormData();
      formData.append("tasks", payload.file);
      formData.append("category", payload.category);
      formData.append("studentClass", payload.clas);
      formData.append("format", payload.file.name.split(".")[1]);
      formData.append("topic", payload.topic);
      formData.append("login", state.getters.USER_LOGIN);
      let data = await Axios.post(`${Url}api/admintest/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      state.commit("SET_FILE_SEND_MESSAGE", data.data.data.message);
      setTimeout(state.commit("SET_FILE_SEND_MESSAGE", ""), 3000);
    },
  },
  modules: {},
});
