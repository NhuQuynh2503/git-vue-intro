//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from '@iconify/vue';
//createApp(App).mount('#app')
const app=createApp(App)
app.component('Icon',Icon)
app.mount('#app')