import {React,useRef} from 'react'
import { NavLink} from 'react-router-dom';
import logo from '../../assets/ptclogo.png'

import '../Header/Header.css'

const nav_links=[
  {
    display:'Home',
    path:'/home'
  },
  {
    display:'Contact',
    path:'/contact'
  },
  {
    display:'Login',
    path:'/login'
  },
  
]
const Header = () => {

  const menuRef=useRef();
  const toggle=()=>menuRef.current.classList.toggle('show_menus')


  return <header className='header'>
    <div className='container-fluid'>
      <div className="justify-content-between d-flex align-items-center">
        <div className="logo"> 
          <img src={logo} alt='logo'/>
        </div>

        <div className="navigation" ref={menuRef} onClick={toggle} >
          <div className="menu d-flex align-items-center gap-5">
          {
            nav_links.map((item,index)=>(
              <NavLink to={item.path} key={index} className={(navClass)  =>navClass.isActive ? 'active_menu' : ''}>{item.display}</NavLink>
            ))
          }
          </div>
        </div>

      <div className="d-flex align-items-center gap-3">
        <span className="mobile-menu" onClick={toggle}>
          < i class="ri-menu-line"></i>
        </span>
      </div>
      </div>
    </div>
  </header>
};

export default Header
