import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { TaskProvider } from "./store/taskContext";
import Home from "./pages/Home";
import "./styles/global.css";

const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // load from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(savedMode === "true");
  }, []);

  useEffect(() => {
    // update body class
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <TaskProvider>
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </TaskProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
