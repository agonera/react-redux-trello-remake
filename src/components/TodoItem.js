import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ onClick, done, text }) {
    return (
        <li
            onClick={onClick}
            style={{ textDecoration: done ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    );
}

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoItem;