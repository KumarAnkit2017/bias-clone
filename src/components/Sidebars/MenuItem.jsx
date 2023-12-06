// MenuItem.js
import React, { useState } from 'react';

const MenuItem = ({ menuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-item">
      <div onClick={toggleSubMenu} className="menu-label">
        {menuItem.label}
      </div>
      {isOpen && (
        <ul className="submenu">
          {menuItem.submenus.map((submenu) => (
            <li key={submenu.id}>{submenu.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
