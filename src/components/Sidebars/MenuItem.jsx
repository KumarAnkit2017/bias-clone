import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ menuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-item">
      <div onClick={toggleSubMenu} className="menu-label">
        {menuItem.menuName}
      </div>
      {isOpen && (
        <ul className="submenu">
          {menuItem.subMenus.map((submenu) => (
            <li key={submenu.id}>
              {/* Use Link to navigate to the specified route */}
              <Link to={submenu.subMenuRoutes}>{submenu.subMenuName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
