// Entities
import { Todo } from "src/entities/todo";

// Store
import { ActionTypes } from "../actions";
import { apiAction } from "./api";

export const saveTodo = (todo: Todo) => {
    return apiAction({
        url: "http://localhost:3001",
        method: "POST",
        onSuccess: addTodo,
        onFailure: () => console.log("Error occurred")
    })
};

export const deleteTodo = (todo: Todo) => {
    return apiAction({
        url: "http://localhost:3001",
        method: "DELETE",
        onSuccess: removeTodo,
        onFailure: () => console.log("Error occurred")
    })
}

export const getTodos = () => {
    // Send a GET request to get Todos, pass response to updateTodos when onSuccess is called
    // This will update the Redux store with the API response
    return apiAction({
        url: "http://localhost:3001/todos",
        method: "GET",
        onSuccess: updateTodos,
        onFailure: () => console.log("Error occured")
    })
}

export const updateTodos = (todos: Todo[]) => ({
    type: ActionTypes.UPDATE_TODOS,
    payload: todos
})

export const addTodo = (todo: Todo) => ({
    type: ActionTypes.ADD_TODO,
    payload: todo
});

export const removeTodo = (todo: Todo) => ({
    type: ActionTypes.REMOVE_TODO,
    payload: todo
})