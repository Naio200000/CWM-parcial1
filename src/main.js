import '../style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../counter.js'
import {App} from './App.vue'
import { createApp } from 'vue'

const app = createApp(App);
app.mount('#app');