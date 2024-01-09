import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import  './Sidebar.css'

const Sidebars = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [menuItems, setMenuItems]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1400/menu-list');
        const result = await response.json();
        debugger;
        setMenuItems(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once after the initial render



    /*const [menuItems, setMenuItems] = useState([
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
      ]);*/
    
      return (
        <div className="sidebar">
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} menuItem={menuItem} />
          ))}
        </div>
      );
    };
    
    export default Sidebars;