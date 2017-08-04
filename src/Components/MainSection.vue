<template>
    <section :class="{main: true, hidden: !todos.length}">
        <input class="toggle-all" type="checkbox" v-model="allDone" />
        <ul class="todo-list">
            <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" v-bind="actions"/>
        </ul>
        <AppFooter :remainingTodos="remainingTodos" :completedTodos="completedTodos" :clearCompleted="actions.clearCompleted"
                    v-on:filterChanged="filterChanged"/>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TodoItem from './TodoItem'
import AppFooter from './AppFooter'
import { Todo, FilterEnum } from '../store/todo'

const TODO_FILTERS = {
    [FilterEnum.All]: () => true,
    [FilterEnum.Active]: (todo: Todo) => !todo.done,
    [FilterEnum.Complete]: (todo: Todo) => todo.done
};

@Component({
    components: {
        TodoItem,
        AppFooter
    },
    props: {
        todos: Array,
        actions: Object
    }
})
export default class MainSection extends Vue {
    todos: Todo[]
    actions: any

    filter: FilterEnum = FilterEnum.All

    get filteredTodos(): Todo[] {
        return this.todos.filter(TODO_FILTERS[this.filter])
    }

    get remainingTodos(): number {
        return this.todos.filter((todo: Todo) => !todo.done).length
    }

    get completedTodos(): number {
        return this.todos.filter((todo: Todo) => todo.done).length
    }

    get allDone(): boolean {
        return this.todos.every((todo: Todo) => todo.done)
    }

    set allDone(value: boolean) {
        this.todos.forEach(e => e.done = value)
    }

    filterChanged(filter: FilterEnum) {
        this.filter = filter
    }
}
</script>