import React from 'react'
import CommonSection from "../components/UI/CommonSection"
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
const shop = () => {
  return <Helmet title="shop">
    <CommonSection title='Products'/>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='4'></Col>
          <Col lg='3' md='4'></Col>
          <Col lg='3' md='4'></Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default shop