<template>
    <header class="header">
        <h1>todos</h1>
        <TodoTextInput placeholder="What needs to be done ?"
                       :onSave="addTodo"
                       :newTodo="true"/>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TodoTextInput from './TodoTextInput'

@Component({
    components: {
        TodoTextInput
    },
    props: {
        addTodo: Function
    }
})
export default class AppHeader extends Vue {
}
</script>

