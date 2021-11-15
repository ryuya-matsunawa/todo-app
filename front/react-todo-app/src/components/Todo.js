import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MainContainer() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3000/api/tasks')
      setTasks(result.data);
    }
    fetchData()
  }, []);

  return (
    <React.Fragment>
      {tasks.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </React.Fragment>
  )
}