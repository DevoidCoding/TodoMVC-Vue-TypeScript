import Vuex, {Module} from 'vuex'
import { getStoreBuilder, ModuleBuilder } from "vuex-typex";
import * as State from './state'
import {RootState} from '../index'

const initialState: State.TodoState = {
    todos: [
        {
            id: 0,
            text: "Use Vue, Vuex & TypeScript",
            done: false
        }
    ]
}

const mb = getStoreBuilder<RootState>().module<State.TodoState>("todo", initialState)

const getters = {
    todos: mb.read((state): State.Todo[] | undefined => {
        return (<State.Todo[]>state.todos).map(todo => todo)
    }, "todos")
}

const mutations = {
    addTodo(state: State.TodoState, text: string) {
        let lastId = state && state.todos && state.todos.length > 0 ? state.todos[state.todos.length - 1].id : -1
        state.todos.push({ id: ++lastId, done: false, text: text })
    },
    removeTodo(state: State.TodoState, todo: State.Todo) {
        let indexOf = state.todos.indexOf(todo)
        if (indexOf > -1)
            state.todos.splice(indexOf, 1)
    },
    clearCompleted(state: State.TodoState) {
        state.todos = state.todos.filter(e => !e.done)
    }
}

const stateReader = mb.state()

const todo = {
    get state() { return stateReader() },
    get todos(): State.Todo[] { return getters.todos() },

    commitAddTodo: mb.commit(mutations.addTodo),
    commitClearCompleted: mb.commit(mutations.clearCompleted),
    commitRemoveTodo: mb.commit(mutations.removeTodo),
}

export default todo
export { mb as todoModelBuilder }