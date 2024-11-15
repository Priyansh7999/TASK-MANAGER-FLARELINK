import React, { useState } from 'react';

function TaskInput({onAddTask}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [priority, setPriority] = useState(false);

    // The handleAddTask function checks if both the title and description fields are not empty (after trimming whitespace).
    const handleAddTask = () => {
        // Check if title and description are not empty
        if (title.trim() === '' || description.trim() === '') {
          alert('Please enter both title and description.');
          return;
        }
    
        // Add task via the callback function
        onAddTask(title, description,start,end ,priority);
        console.log('Task Added:', title, description, start, end, priority); // Debug log
    
        // Clear the input fields
        setTitle('');
        setDescription('');
        setStart('');
        setEnd('');
        setPriority(false);
      };
    return (
        <>
        <div className="task-input">
            <h1>ADD A NEW TASK</h1>
            <div className='title-input'>
                <label>TITLE</label>
                <input
                    type="text"
                    placeholder='Add a new task....'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className='desc-input'>
                <label>DESCRIPTION</label>
                <input
                    type='text'
                    placeholder='Task Description....'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </div>

            <div className='start-end'>
                <label htmlFor="date">Start Date</label>
                <input 
                    type='date'
                    id='start-date'
                    placeholder='Starting Date...'
                    value={start}
                    onChange={(e)=>setStart(e.target.value)}
                />
                <label htmlFor="date">End Date</label>
                <input 
                    type='date'
                    id='end-date'
                    placeholder='Ending Date...'
                    value={end}
                    onChange={(e)=>setEnd(e.target.value)}
                />
                <label htmlFor="priority">Priority</label>
                <input
                    type='checkbox'
                    id='priority'
                    checked={priority}
                    onChange={(e)=>setPriority(e.target.checked)}
                />
            </div>
            <div className='but'>
            <button className='butt' onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
        </>
    )
}
export default TaskInput;
