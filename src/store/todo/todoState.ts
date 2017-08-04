export interface Todo {
    id: number
    text: string
    done: boolean
}

export interface TodoState {
    todos: Todo[]
}

export interface TodoContext {
    todos: Todo[]
}

export enum FilterEnum {
    All = 'all',
    Active = 'active',
    Complete = 'complete'
}