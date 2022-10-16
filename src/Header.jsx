import { useState, useEffect } from "react";

function Header() {
  const title = "Social Media Dashboard";

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (theme) {
      document.body.classList = "light-theme";
    }

    if (!theme) {
      document.body.classList = "dark-theme";
    }
  });

  return (
    <div className="header">
      <div className="header-col-left">
        <h1>{title}</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="header-col-right">
        <div className="toggle-button-container">
          {theme ? <p>Dark Mode</p> : <p>Light Mode</p>}
          <label className="switch">
            <input
              htmlFor="switch"
              type="checkbox"
              onClick={() => setTheme((prevVal) => !prevVal)}
            ></input>
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
