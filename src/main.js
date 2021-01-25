import { createApp } from 'vue'
import VueAxios from "vue-axios";
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap/dist/css/bootstrap.css";

axios.defaults.baseURL = 'http://localhost:5000/api/v1/';

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
