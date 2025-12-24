import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div className="container">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default Home;
