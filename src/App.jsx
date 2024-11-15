import { useEffect, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import { saveTasks, loadTasks } from '../utils/localStorage.js';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import TaskModal from './components/TaskModal';
function App() {
  const[tasks,setTasks]=useState([]);
  const [selectedTask,setSelectTask]=useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    const loadedTasks = loadTasks();
    console.log('Loaded Tasks:', loadedTasks); // Debug log
    setTasks(loadTasks());
  },[]);

  useEffect(()=>{
    console.log('Saving Tasks:', tasks);
    saveTasks(tasks);
  },[tasks]);
  function addTask(title, description,start,end,priority){
    const newTask={
      id:new Date().getTime(),
      title,
      description,
      completed: false,
      start,
      end,
      priority,
    }
    console.log('Adding New Task:', newTask); // Debug log
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  function deleteTask(id){
    console.log('Deleting Task with ID:', id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  function handleTaskClick(task){
    setSelectTask(task);
  };

  function closeModal(){
    setSelectTask(null);
  }


  const handleCheck = (id, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed } : task
      )
    );
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className='app'>
          <Header />
          <TaskInput onAddTask={addTask} />
          <TaskList tasks={tasks} onDelete={deleteTask} onClick={handleTaskClick} onCheck={handleCheck} />
          <TaskModal task={selectedTask} onClose={closeModal} />
      </div>
    </>
  )
}          
export default App;
