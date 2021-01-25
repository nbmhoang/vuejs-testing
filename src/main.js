import { createApp } from 'vue'
// import VueAxios from "vue-axios";
// import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css";

// axios.defaults.baseURL = '';

createApp(App).use(store).use(router).mount('#app')
