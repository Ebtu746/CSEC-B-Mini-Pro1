import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
