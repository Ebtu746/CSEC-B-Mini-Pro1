import { useContext } from "react";
import { TaskContext } from "../store/taskContext";

function Stats() {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="container">
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Remaining Tasks: {remaining}</p>
    </div>
  );
}

export default Stats;
