import React, {useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/home.css'
import Services from '../services/Services'
import products from '../assets/data/products'
import { useEffect, useState } from 'react'
const Home = () => {


    const [trensdingProducts,setTrensdingProducts] = useState([]);
    const [bestSalesProducts,setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item => item.category === 'chair');

    const filteredBestSalesProducts = products.filter(item => item.category === 'sofa');

    setTrensdingProducts(filteredTrendingProducts);
    setProducts(filteredTrendingProducts);
  },[]);
  return  <Helmet title={'Home'}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Trending product</p>
              <h2>Make Your Interior More Minimalistic & Mordern</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum beatae tempore eaque quas explicabo reiciendis voluptate nemo modi officiis nesciunt?</p>

              <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to='shop'>SHOP NOW</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
    <section className="trending__poducts">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductsList data={trensdingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
      <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>

}

export default Home