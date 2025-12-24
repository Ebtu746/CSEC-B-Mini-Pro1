import React from "react";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
