import { ADD_TODO, SHOW_ALL } from "../constants";
import { combineReducers } from "redux";

const initialState = {
    visibilityFilter: SHOW_ALL,
    todoList: [
        { id: '777', text: 'learn react', done: false }
    ]
};

function addTodoReducer(state = [], action) {
    if (action.type === ADD_TODO) {
        return Object.assign({}, state, {
            todoList: [...state, { id: action.id, text: action.text, done: false }]
        })
    }
    return state;
}


export default combineReducers({
    addTodoReducer
});