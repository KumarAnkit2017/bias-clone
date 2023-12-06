import React, { useState } from 'react';
import MenuItem from './MenuItem';
import  './Sidebar.css'

const Sidebars = () => {
    const [menuItems, setMenuItems] = useState([
        {
          id: 1,
          label: 'Operation',
          submenus: [ { id: 21, label: 'Operation 1' },],
        },
        {
          id: 2,
          label: 'Commerce',
          submenus: [
            { id: 21, label: 'Commerce1' },
            { id: 22, label: 'Commerce2' },
          ],
        },
      ]);
    
      return (
        <div className="sidebar">
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      );
    };
    
    export default Sidebars;