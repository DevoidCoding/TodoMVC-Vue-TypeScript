<template>
  <input :class="{'new-todo': newTodo, edit: editing}"
         ref="todoInput"
        type="text"
        v-todo-focus="true"
        :placeholder="placeholder"
        :value="value"
        @input="updateText"
        @blur="handleBlur"
        @keyup.enter="handleSubmit"/>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
        },
        newTodo: {
            type: Boolean,
            default: false
        },
        editing: {
            type: Boolean,
            default: false
        },
        onSave: Function
    },
    directives: {
        'todo-focus': function (el, binding) {
				if (binding.value) {
                    setTimeout(() => el.focus(), 1)
				}
			}
    }
})
export default class TodoTextInput extends Vue {
    placeholder: string
    newTodo: boolean
    editing: boolean
    onSave: any
    value: string

    handleBlur(e: any) {
        if (this.editing)
            this.onSave(e.target.value.trim())
    }

    handleSubmit(e: any) {
        this.onSave(e.target.value.trim());
        if (this.newTodo)
            e.target.value = ''
    }

    updateText(e: any) {
        this.$emit('input', e.target.value)
    }
}
</script>