import React from 'react';
import "./themeToggleIcons.css";
function ThemeToggleIcons({ theme }) {
  return (
    <>
      <img className="lua" src="/img/icon-toggle-theme/lua.png" alt="Lua" />
      <img className="sol" src="/img/icon-toggle-theme/sol.png" alt="Sol" />
    </>
  );
}

export default ThemeToggleIcons;
