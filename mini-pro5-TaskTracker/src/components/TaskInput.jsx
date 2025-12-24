import React, { useState, useContext } from "react";
import { TaskContext } from "../store/taskContext";

const TaskInput = () => {
  const { addTask } = useContext(TaskContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default TaskInput;
