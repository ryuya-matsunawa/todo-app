import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/todo.css';

export default function MainContainer() {
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3000/api/tasks')
      setTasks(result.data.tasks);
      setColumns(result.data.status_list);
    }
    fetchData()
  }, []);
  
  const categorize_tasks = columns.map((column) => {
    let obj = {
      name: '',
      tasks: []
    }
    obj.name = column
    obj.tasks = tasks.filter((task) => task.status === column)
    return obj
  });

  return (
    <React.Fragment>
      <div className="container">
        {categorize_tasks.map((items, columnIndex) => (
          <div className="column" key={columnIndex}>
            <span className="title">{items.name}</span>
            {items.tasks.map((item, index) => (
              <div className="item" key={index}>{item.name}</div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}