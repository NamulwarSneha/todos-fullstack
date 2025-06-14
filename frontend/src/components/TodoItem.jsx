import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo">
      <span
        onClick={() => onToggle(todo._id, todo.completed)}
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo._id)}>X</button>
    </li>
  );
};

export default TodoItem;
