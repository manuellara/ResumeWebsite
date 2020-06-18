import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
    platformData(state) {
      return state.platformData;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    LOGOUT(state) {
      state.user = null;
    },
  },
  actions: {
    autoSignIn({ commit }, payload) {
      commit("SET_USER", payload);
      // re-routes user to the Homepage
      router.replace("/home");
    },
    signIn({ commit }) {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .then(function(result) {
          // The signed-in user info.
          var user = result.user;
          commit("SET_USER", user);
          // re-routes user to the Homepage
          router.replace("/home");
        })
        .catch((error) => {
          alert(error);
          return;
        });
    },
    logout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          commit("LOGOUT");
          // re-routes user to the Login page
          router.replace("/");
        })
        .catch(function(error) {
          alert(error);
          return;
        });
    },
  },
  modules: {},
});
