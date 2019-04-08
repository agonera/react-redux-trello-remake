import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "../constants";

let id = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: id++,
        text: text
    }
};

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    }
};

export const toggleStatus = (id) => {
    return {
        type: TOGGLE_STATUS,
        id: id
    }
};
