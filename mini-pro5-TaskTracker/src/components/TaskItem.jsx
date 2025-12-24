import { useContext } from "react";
import { TaskContext } from "../store/taskContext";

function TaskItem({ task }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const toggleComplete = () => {
    setTasks(
      tasks.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TaskItem;
