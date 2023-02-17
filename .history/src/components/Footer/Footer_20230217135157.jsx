 import React from 'react'
 import './footer.css'
 import logo from '../../assets/images/eco-logo.png'


import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
 const Footer = () => {
   return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
        <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>ShopGPT</h1>
              </div>
              
        </div>
        </Col>
        <Col lg='3'></Col>
        <Col lg='2'></Col>
        <Col lg='3'></Col>
      </Row>
    </Container>
   </footer>
 }
 
 export default Footer