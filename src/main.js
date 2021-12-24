import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(store)
app.use(BootstrapVue3)



app.mount('#app')
