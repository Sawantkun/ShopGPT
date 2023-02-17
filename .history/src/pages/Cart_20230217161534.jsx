import React from 'react'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import { Container, Row, Col } from 'reactstrap'

const cart = () => {
  return (
      <Helmet title="Cart">
          <CommonSection title="Shopping Cart"/>
          <section>
            <Container>
              
            </Container>
          </section>
      </Helmet>
  )
}

export default cart