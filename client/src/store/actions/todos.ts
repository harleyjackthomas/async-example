// Entities
import { Todo } from "src/entities/todo";

export enum ActionTypes {
    ADD_TODO = "ADD_TODO",
    REMOVE_TODO = "REMOVE_TODO",
    UPDATE_TODOS = "UPDATE_TODOS"
}

export interface ADD_TODO_ACTION {
    type: ActionTypes.ADD_TODO,
    payload: Todo
}

export interface REMOVE_TODO_ACTION {
    type: ActionTypes.REMOVE_TODO,
    payload: Todo
}

export interface UPDATE_TODO_ACTION {
    type: ActionTypes.UPDATE_TODOS,
    payload: Todo[]
}

export type Action = ADD_TODO_ACTION | REMOVE_TODO_ACTION | UPDATE_TODO_ACTION;