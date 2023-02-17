 import React from 'react'
 import './footer.css'

import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
 const Footer = () => {
   return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'></Col>
        <Col lg='3'></Col>
        <Col lg='2'></Col>
        <Col lg='3'></Col>
      </Row>
    </Container>
   </footer>
 }
 
 export default Footer