import React from 'react';

function TaskItem({ task, onToggle }) {
  return (
    <li
      className={`flex items-center justify-between p-2 border-b ${
        task.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <span>{task.title}</span>
      <button
        onClick={() => onToggle(task.id)}
        className="bg-green-500 text-white px-2 py-1 rounded"
      >
        {task.completed ? 'Undo' : 'Done'}
      </button>
    </li>
  );
}

export default TaskItem;
