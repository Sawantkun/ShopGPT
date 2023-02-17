import React from 'react'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import { Container, Row, Col } from 'reactstrap'
import tdImg from '../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import {cartActions}  from 

const cart = () => {
  return (
      <Helmet title="Cart">
          <CommonSection title="Shopping Cart"/>
          <section>
            <Container>
              <Row>
                <Col lg='9'>
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img src={tdImg} alt="" /></td>
                        <td>Mordern Arm Chair</td>
                        <td>INR 3000/-</td>
                        <td>2px</td>
                        <td><i class="ri-delete-bin-line"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col lg='3'>
                </Col>
              </Row>
            </Container>
          </section>
      </Helmet>
  )
}

export default cart