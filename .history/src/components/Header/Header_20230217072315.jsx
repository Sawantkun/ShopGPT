import React from 'react';
import './header.css'
import logo from '../../assets/images/eco-lo'
import {Container, Row} from "reactstrap";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src="" alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header