import { useContext, useState } from "react";
import { TaskContext } from "../store/taskContext";

function TaskInput() {
  const [text, setText] = useState("");
  const { tasks, setTasks } = useContext(TaskContext);

  const addTask = () => {
    if (!text.trim()) return alert("Task cannot be empty");

    setTasks([
      ...tasks,
      { id: Date.now(), text, completed: false }
    ]);

    setText("");
  };

  return (
    <div className="task-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
