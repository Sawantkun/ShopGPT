import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helemet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product_details.css'
import {motion} from "framer-motion";



const ProductDetails = () => {

  const[tab,setTab] = useState('desc')
  const {id} = useParams()
  const product = products.find(item=> item.id === id)
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc} = product
  return (
    <Helemet title={productName} >
    <CommonSection/>
    <section className='pt=0'>
    <Container>
     <Row>
      <Col lg = "6">
        <img src={imgUrl} alt="" />
      </Col>
      <Col lg = "6"></Col>
      <div className="product_details">
        <h2>ProductName</h2>
        <div className="product_rating d-flex align-items-center gap-5 mb-3">
          <div>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
            <span><i class="ri-star-s-fill"></i></span>
          </div>
          <p>
            (<span>{avgRating}</span>ratings)
          </p>
        </div>
        <span className='product__price'>INR{price}</span>
        <p className='mt-3'>{shortDesc}</p>
        <motion.button whileTap={{scale: 1.2}}className="buy__btn">Add to cart</motion.button>
      </div>
     </Row>
    </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 className={`${tab==='desc' ? 'active__tab' : ''}`} onClick={()=> setTab('desc')}>Description</h6>
              <h6 className={`${tab==='rev' ? 'active__tab' : ''}`} onClick={()=> setTab('rev')}>Reviews(reviews.length)</h6>
            </div>



            {
              tab==='desc'? 
            <div className="tab__content mt-5">
              <p>{description}</p>
            </div> : (<div className='product__review mt-5'>
              <div className="review__wrapper">
                <ul>
                  {
                    reviews?.map((item,index)=>(
                      <li key={index}><span>{item.rating}(rating)</span>
                      <p>{item.text}</p>
                      </li>
                    ))
                  }
                </ul>

                .review__form
              </div>
            </div>)
            }
          </Col>
        </Row>
      </Container>
    </section>
    </Helemet>
  )
}

export default ProductDetails