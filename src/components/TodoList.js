import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// {...todoItem} - the properties of the object that you pass in are copied onto the component's props
// so in this case: id, text, done

function TodoList({ todoList, onTodoClick }) {
    return (
        <ul>
            {todoList.map(todoItem => (
                <TodoItem
                    key={todoItem.id}
                    {...todoItem}
                    onClick={() => onTodoClick(todoItem.id)}
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;