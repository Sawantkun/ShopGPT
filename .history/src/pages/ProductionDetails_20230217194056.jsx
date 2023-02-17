import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helemet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product_details.css'
import {motion} from "framer-motion";




const ProductDetails = () => {
  const {id} = useParams()
  const product = products.find(item=> item.id === id)
  const {imgUrl, productName, price, avgRating, reivew, desccription, shortDesc} = product
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
            <div className="tab__wrapper">
              <h6>Description</h6>
              <h6>Reviews</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Helemet>
  )
}

export default ProductDetails