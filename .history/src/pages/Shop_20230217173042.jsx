import React,{useState} from 'react'
import CommonSection from "../components/UI/CommonSection"
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css';
import products from '../assets/data/products';
const shop = () => {
  const[productsData,serProductsData] = useState(products)

  const handleFilter= e =>{
    const filterValue = e.target.value
    if(filterValue === 'sofa'){
      const filterdProducts = products.filter(item=>)
    }
  }
  return <Helmet title="shop">
    <CommonSection title='Products'/>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='3'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='3'>
          <div className="filter__widget">
              <select>
                <option>sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="search__box">
              <input type="text" placeholder='search...' />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default shop