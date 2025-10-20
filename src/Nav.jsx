import "./Nav.css";
import React, { useEffect, useState } from "react";

function Nav() {
  const [theme, setTheme] = useState("light"); // default is light
 

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = ""; // clear any existing classe
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  return (
    <nav>
      <img className="logo" src="/src/assets/CHAK-LOGO.png" alt="" />
      <div className="nav-links">
        <li>HOME</li>
        <li>Book Trip</li>
        <li>Send Goods</li>
        <li>Tourism</li>
        <li>Track</li>
        <li>Agencies</li>
      </div>

      <div className="utility-tools">
        <button onClick={toggleTheme}>change StrictMode </button>
        <div className="user-profile">
      
         
        </div>
      </div>
    </nav>
  );
}

export default Nav;
