import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './plugins/sweetalert2'

import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.config.productionTip = false

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8cvAzUaE5LkqnnkxcRC07iKes4oMlcc0",
  authDomain: "fire-test-d4a9b.firebaseapp.com",
  databaseURL: "https://fire-test-d4a9b-default-rtdb.firebaseio.com",
  projectId: "fire-test-d4a9b",
  storageBucket: "fire-test-d4a9b.appspot.com",
  messagingSenderId: "736823973378",
  appId: "1:736823973378:web:ff820b2ff946633fc1791b"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

