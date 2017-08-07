import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import { buildStore } from './store'
import { RootState } from "./store/index"
import App from './Views/App'
import './styles/style.css'

Vue.use(Vuex)

new Vue({
    el: "#app",
    router,
    store: buildStore(),
    render: h => h(App)
})