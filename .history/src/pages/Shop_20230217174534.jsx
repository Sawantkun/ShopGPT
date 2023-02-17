import React,{useState} from 'react'
import CommonSection from "../components/UI/CommonSection"
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
const shop = () => {
  const[productsData,serProductsData] = useState(products)

  const handleFilter=(e)=>{
    const filterValue = e.target.value
    if(filterValue === 'sofa'){
      const filterdProducts = products.filter(item=> item.category === 'sofa')

      serProductsData(filterdProducts)
    }
    if(filterValue === 'mobile'){
      const filterdProducts = products.filter(item=> item.category === 'mobile')

      serProductsData(filterdProducts)
    }
    if(filterValue === 'chair'){
      const filterdProducts = products.filter(item=> item.category === 'chair')

      serProductsData(filterdProducts)
    }
    if(filterValue === 'watch'){
      const filterdProducts = products.filter(item=> item.category === 'watch')

      serProductsData(filterdProducts)
    }
    if(filterValue === 'wireless'){
      const filterdProducts = products.filter(item=> item.category === 'wireless')

      serProductsData(filterdProducts)
    }
    
  }
  const handleSearch=e=>{
    const searchTerm =e.target.value
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
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
    <section>
      <Container className='pt-0'>
        <Row>
          {
            productsData.length === 0? <h1>No products are found!</h1> : <ProductsList data={productsData} />
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default shop