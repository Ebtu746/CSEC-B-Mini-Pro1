import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return (
    <header>
      <h1>Task Tracker</h1>
      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
      </nav>
    </header>
  );
}

export default Header;
