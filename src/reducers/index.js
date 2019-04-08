import { ADD_TODO } from "../constants";
import { combineReducers } from "redux";


function addTodoReducer(state = [], action) {
    if (action.type === ADD_TODO) {
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                done: false
            }
        ]
    }
    return state;
}


export default combineReducers({
    addTodoReducer
});