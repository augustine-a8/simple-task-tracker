import { useState } from 'react';

import App from '../App';
import { TaskContext } from '../context';

export default function TaskTracker() {
  const [taskList, setTaskList] = useState([]);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      <App />
    </TaskContext.Provider>
  );
}
