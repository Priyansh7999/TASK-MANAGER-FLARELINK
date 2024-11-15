import React from 'react'
function TaskModal({ task, onClose }){
    if(!task) return null;
    return (
        <div className="modal">
          <div className="modal-content">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <br />
            <p>Start: {task.start}   End: {task.end}</p>
            <button onClick={onClose}><i className="ri-close-large-fill"></i></button>
          </div>
        </div>
    );
};
export default TaskModal;