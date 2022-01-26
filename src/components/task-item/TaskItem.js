import './taskitem.css';

export default function TaskItem({ title, description }) {
  return (
    <div className="taskitem">
      <div className="taskitem__status" />
      <div className="task_item__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
