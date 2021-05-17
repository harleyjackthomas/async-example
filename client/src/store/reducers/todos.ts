// Entities
import {Todo} from "src/entities/todo";
// Store
import {Action, ActionTypes} from "../actions";

const initialState: Todo[] = [ ]

export function reducer (state: Todo[] = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [ ...state, action.payload ]
        case ActionTypes.UPDATE_TODOS:
            return [ ...action.payload ]
    }

    return state;
}