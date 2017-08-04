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
import * as todos from '../store/todo'

@Component({
    components: {
        AppHeader,
        MainSection
    },
})
export default class App extends Vue {
    addTodo(text:string) {
        if (text.trim().length > 0)
            todos.commitAddTodo(this.$store, text.trim())
    }

    get todos(): todos.Todo[] {
        return todos.readTodos(this.$store)
    }

    get actions(): any {
        return {
            removeTodo: (todo: todos.Todo) => todos.commitRemoveTodo(this.$store, todo),
            clearCompleted: () => todos.commitClearCompleted(this.$store)
        }
    }
}
</script>