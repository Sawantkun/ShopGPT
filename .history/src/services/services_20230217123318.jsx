import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { motion } from 'framer-motion'
import './services.css';
import serviceData from '../assets/data/serviceData'

const services = () => {
  return <section className="services">
    <Container>
        <Row>{
            serviceData.map((item, index)=>(
            <Col lg='3' md='4' key={index}>
                <div className="service__item" style={{    background: var(--card-bg-01);
}}
                    <span><i class={item.icon}></i></span>
                    <div> 
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                    </div>
                </div>
            </Col>
            ))
            }
        </Row>
    </Container>
  </section>
}

export default services