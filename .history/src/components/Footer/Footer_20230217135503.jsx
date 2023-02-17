 import React from 'react'
 import './footer.css'
 import logo from '../../assets/images/eco-logo.png'


import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
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
        <p className="footer_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur quasi quos laborum alias dolore debitis assumenda dolores illum est.
              </p>
        </Col>
        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup>
              <ListGroupItem>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem>
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>
              
            </ListGroup>
          </div>
        </Col>
        <Col lg='2'></Col>
        <Col lg='3'></Col>
      </Row>
    </Container>
   </footer>
 }
 
 export default Footer