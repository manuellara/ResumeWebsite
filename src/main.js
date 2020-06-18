import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from "firebase/app";

Vue.config.productionTip = false

// Firebase configuration {INSERT YOUR OWN}
import firebaseConfig from './firebaseconfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import Firestore & export as db
const db = firebase.firestore();
export { db }

Vue.config.productionTip = false

const check = firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    vuetify,
    created() {
      if (user) {
        store.dispatch('autoSignIn', user)
      }
    },
    render: h => h(App)
  }).$mount('#app')
  check()
})