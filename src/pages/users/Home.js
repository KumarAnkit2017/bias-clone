import React from 'react'
import Sidebars from '../../components/Sidebars/Sidebars'
import './Home.css'
import MenuRouters from '../../router/MenuRouters'
import Routers from '../../router/Routers'



const Home = () => {
  return <div className="home">
  <Sidebars />
  <div className="content-box">
    <Routers></Routers>
  </div>
</div>
}

export default Home
