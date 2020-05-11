import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import Add from './components/Add';


function App() {

  const[tasks, setTasks]=useState([
    {
      text:"Learn React",
      isCompleted: false
    },
    {
      text:"Graduate from Coding Dojo",
      isCompleted: false
    },
    {
      text:"Find a Job",
      isCompleted: false
    },
    {
      text:"Get rich",
      isCompleted: false
    },
  ])

  const completeTask=(i)=>{
    const newTasks=[...tasks];
    newTasks[i].isCompleted=true;
    setTasks(newTasks);
  }


  const removeTask=(i)=>{
    const newTasks=[...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  }
  const addTask=(text)=>{
    const newTasks=[...tasks,{text}];
    setTasks(newTasks);
  }
  const uncompleteTask=(i)=>{
    const newTasks=[...tasks];
    newTasks[i].isCompleted=false;
    setTasks(newTasks);
  }


  return (
    <ul class="list-group">
      <li class="list-group-item">
        {
          tasks.map((task, i)=>(
            <Task key={i} i={i} task={task} completeTask={completeTask} uncompleteTask={uncompleteTask} removeTask={removeTask} />
          ))
        }
        <Add addTask={addTask} />
      </li>
    </ul>
    
  );
}

export default App;
