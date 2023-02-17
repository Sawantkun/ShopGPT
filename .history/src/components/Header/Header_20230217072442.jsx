import React from 'react';
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import {Container, Row} from "reactstrap";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                <p>since 1995</p>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav_item"></li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header