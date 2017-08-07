import {ActionContext, Store, mapGetters} from 'vuex'
import { getStoreAccessors } from "vuex-typescript"
import { State as RootState } from '../state'
import { TodoState, Todo } from './todoState'

type TodoContext = ActionContext<TodoState, RootState>

export const todo = {
    namespaced: true,

    state: {
        todos: [
            {
                id: 0,
                text: "Use Vue, Vuex & TypeScript",
                done: false
            }
        ]
    },

    getters: {
        getTodos(state: TodoState): Todo[] {
            return state.todos.map(todo => todo)
        }
    },

    mutations: {
        addTodo(state: TodoState, text: string) {
            let lastId = state && state.todos && state.todos.length > 0 ? state.todos[state.todos.length-1].id : -1
            state.todos.push({id: ++lastId, done: false, text: text})
        },
        removeTodo(state: TodoState, todo: Todo) {
            let indexOf = state.todos.indexOf(todo)
            if (indexOf > -1)
                state.todos.splice(indexOf, 1)
        },
        clearCompleted(state: TodoState) {
            state.todos = state.todos.filter(e => !e.done)
        }
    },

    actions: {
    },
}

const { commit, read, dispatch } = getStoreAccessors<TodoState, RootState>("todo")

const getters = todo.getters

export const readTodos = read(getters.getTodos)

const mutations = todo.mutations

export const commitAddTodo = commit(mutations.addTodo)
export const commitRemoveTodo = commit(mutations.removeTodo)
export const commitClearCompleted = commit(mutations.clearCompleted)