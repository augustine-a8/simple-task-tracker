import { useState, useContext } from 'react';

import './header.css';
import { TaskContext } from '../../context';

export default function Header() {
  const [showInput, setShowInput] = useState(false);
  const { taskList, setTaskList } = useContext(TaskContext);

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  function toggleShowInput() {
    setShowInput(!showInput);
  }

  function handleButtonClick() {
    if (showInput) {
      validateTask();
    } else {
      toggleShowInput();
    }
  }

  function validateTask() {
    if (task.title === '' || task.description === '') {
      alert('Please input required field');
    } else {
      setTaskList([...taskList, task]);
      toggleShowInput();
      setTask({ title: '', description: '' });
    }
  }

  return (
    <div className="header">
      <div className="header__content">
        <h2 className="app-title">TASK TRACKER</h2>
        <button type="button" onClick={handleButtonClick}>
          {showInput ? 'ADD TASK' : 'NEW TASK'}
        </button>
      </div>
      {showInput && (
        <div className="task__input">
          <input
            type="text"
            placeholder="Task Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
      )}
    </div>
  );
}
