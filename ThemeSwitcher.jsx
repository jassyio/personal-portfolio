import { useState } from "react";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    setIsOpen(false);
  };

  return (
    <div className="theme-switcher">
      <button onClick={() => setIsOpen(!isOpen)}>Theme</button>
      {isOpen && (
        <ul className="dropdown">
          <li onClick={() => handleThemeChange("light")}>Light</li>
          <li onClick={() => handleThemeChange("dark")}>Dark</li>
          <li onClick={() => handleThemeChange("classic")}>Classic</li>
          <li onClick={() => handleThemeChange("color")}>Color</li>
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitcher;
