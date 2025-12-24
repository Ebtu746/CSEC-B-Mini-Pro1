
import React, { useContext } from "react";
import { TaskContext } from "../store/taskContext";

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
