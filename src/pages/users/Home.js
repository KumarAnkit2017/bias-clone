import React from 'react'
import Helmet from '../../components/Helmet/Helmet'
import { Container,Row,Col } from 'react-bootstrap'
import Sidebars from '../../components/Sidebars/Sidebars'
import './Home.css'

const Home = () => {
  return <div className="home">
  <Sidebars />
  <div className="content-box">
    Content
  </div>
</div>
}

export default Home
