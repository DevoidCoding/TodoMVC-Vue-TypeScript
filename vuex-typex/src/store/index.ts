import {Store} from 'vuex'
import {getStoreBuilder} from 'vuex-typex'
import * as TodoState from './todo/state'

export interface RootState
{
    todo: TodoState.TodoState
}

export const buildStore = () => getStoreBuilder<RootState>().vuexStore()