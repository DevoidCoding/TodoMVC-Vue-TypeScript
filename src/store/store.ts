import Vue from 'vue'
import Vuex from 'vuex'
import { State } from './state'
import { todo } from './todo'

Vue.use(Vuex)

export const createStore = () => new Vuex.Store<State>({
    modules: {
        todo,
    },
});

export const store = createStore()