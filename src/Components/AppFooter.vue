<template>
    <footer class="footer">
        <span class="todo-count">
            <strong>{{remainingTodos || 'No'}}</strong> item{{remainingTodos > 1 ? 's' : ''}} left
        </span>
        <ul class="filters">
            <li v-for="filter in filters" :key="filter">
                <a :class="{selected: filter === selectedFilter}"
                    style="cursor: pointer; text-transform: capitalize"
                    @click="changeFilter(filter)">
                    {{ filter }}
                </a>
            </li>
        </ul>
        <button v-show="completedTodos" class="clear-completed"
                @click="clearCompleted">Clear completed</button>
    </footer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component'
import { FilterEnum } from '../store/todo'

@Component({
    props: {
        remainingTodos: Number,
        completedTodos: Number,
        clearCompleted: Function,
    }
})
export default class AppFooter extends Vue {
    remainingTodos: number
    completedTodos: number
    selectedFilter: string = FilterEnum.All
    clearCompleted: Function

    get filters(): string[] {
        const objValues = Object.keys(FilterEnum).map(k => FilterEnum[k]);
        return objValues.filter(v => typeof v === "string") as string[]
    }

    changeFilter(filter: FilterEnum) {
        this.selectedFilter = filter
        this.$emit("filterChanged", filter)
    }
}
</script>

<style>
  
</style>
