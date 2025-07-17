import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="New task"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default TaskForm;
