import { useContext } from 'react';

import { TaskItem } from '..';
import './tasks.css';
import { TaskContext } from '../../context';

export default function Tasks() {
  const { taskList } = useContext(TaskContext);

  console.log(taskList);

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <TaskItem
          key={task.title}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}
