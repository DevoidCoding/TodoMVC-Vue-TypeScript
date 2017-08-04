<template>
    <TodoTextInput v-if="editing" v-model="todo.text" :editing="editing" :onSave="handleSave" />
    <li v-else :class="{completed: todo.done}">
        <input class="toggle" type="checkbox" v-model="todo.done" />
        <label @dblclick="editing=true">{{todo.text}}</label>
        <button class="destroy"
                @click="removeTodo(todo)" />
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TodoTextInput from "./TodoTextInput"
import {Todo} from '../store/todo'

@Component({
    components: {
        TodoTextInput
    },
    props: {
        todo: Object,
        removeTodo: Function,
    }
})
export default class TodoItem extends Vue {
    todo: Todo
    removeTodo: Function
    editing: boolean = false

    handleSave(text: string) {
        if (text.length === 0)
            this.removeTodo(this.todo);
        this.editing = false
    };
}
</script>