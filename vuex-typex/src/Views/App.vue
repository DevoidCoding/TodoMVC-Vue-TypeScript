<template>
    <section class="todoapp" v-cloak>
        <AppHeader :addTodo="addTodo" />
         <MainSection :todos="todos" :actions="actions" /> 
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AppHeader from '../Components/AppHeader.vue'
import MainSection from '../Components/MainSection.vue'
import TodoContex from '../store/todo/todo'
import * as State from '../store/todo/state'

@Component({
    components: {
        AppHeader,
        MainSection
    },
})
export default class App extends Vue {
    addTodo(text:string) {
        if (text.trim().length > 0)
            TodoContex.commitAddTodo(text.trim())
    }

    get todos(): State.Todo[] {
        return TodoContex.todos
    }

    get actions(): any {
        return {
            removeTodo: (todo: State.Todo) => TodoContex.commitRemoveTodo(todo),
            clearCompleted: () => TodoContex.commitClearCompleted()
        }
    }
}
</script>