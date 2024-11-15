import React from 'react';

function TaskItem({ task, onDelete, onClick, onCheck }) {
  return (
    <>
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <div className="task-info" onClick={() => onClick(task)}>
          <span>{task.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{task.priority && <i className="ri-star-fill"></i>}</span>
        </div>
        {/* Checkbox to mark task as completed */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => {
            e.stopPropagation();
            onCheck(task.id, e.target.checked);
          }}
        />

        {/* Delete button */}
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
        >
          <i className="ri-delete-bin-6-line"></i>
        </button>
      </div>
    </>
  );
}

export default TaskItem;
