import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import SearchBar from './SearchBar';
function TaskList({ tasks, onDelete, onClick, onCheck }) {
    if(tasks.length == 0){
        return;
    }
  const [sortedTasks, setSortedTasks] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  console.log(sortedTasks)
  console.log(sortOption)

  // UseEffect to update sorted tasks when tasks or sortOption change
  useEffect(() => {
    handleSort(sortOption);
  }, [tasks, sortOption]);

  // Function to sort tasks based on selected criteria
  const handleSort = (option) => {
    let sorted = [...tasks];
    if (option === 'name') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'id') {
      sorted.sort((a, b) => a.id - b.id);
    }
    else if(option==='date'){
      sorted.sort((a,b)=>new Date(a.start)-new Date(b.start))
    }
    else if (option === 'priority') {
      const all_priority=sorted.filter((task) => task.priority === true);
      sorted=[...all_priority];
      sorted.sort((a,b)=>new Date(a.end)-new Date(b.end))
    }
    else if(option === 'end'){
      sorted.sort((a,b)=>new Date(a.end)-new Date(b.end))
    }
    setSortedTasks(sorted);
  };



  // Function to handle search term change
  const filteredTasks = sortedTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-list">
      {/* Sorting Dropdown */}
      <div className='h-sort'>
      <h2>TASK LIST</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-dropdown">
            <option value="">Show All</option>
            <option value="name">Sort by Name</option>
            <option value="id">Sort by ID</option>
            <option value="date">Sort by Starting Date</option>
            <option value="end">Sort by End Date</option>
            <option value="priority">Priority Task Only</option>
        </select>
      </div>

      

      {/* Render tasks based on the sorting criteria and search term */}

      {(searchTerm ? filteredTasks : sortedTasks).map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onClick={onClick}
          onCheck={onCheck}
        />
      ))}
    </div>
  );
}

export default TaskList;
