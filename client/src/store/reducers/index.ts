import { combineReducers } from "redux";

// Reducers
import { reducer as todos } from './todos'

// Entities
import { Todo } from "src/entities/todo";

export interface State {
    todos: Todo[]
}

export default combineReducers({
    todos
});