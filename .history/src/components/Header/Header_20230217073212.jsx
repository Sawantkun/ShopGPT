import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'
import {Container, Row} from "reactstrap";
import user_icon from '../../assets'

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
                <li className="nav_item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="home">Shop</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="home">Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">

              <span><i class="ri-heart-line"></i></span>
              <span className="cart__icon"><i class="ri-shopping-bag-line"></i></span>

              <span><img src="" alt="" /></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header