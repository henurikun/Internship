import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import ProductLine from './ProductLineLayout.jsx'
//import Carousel from './Carousel.jsx'
import Header from './Header.jsx'

function App() {
  const [count, setCount] = useState(0)
  const products = ['Laptop', 'Phone', 'Headphones'];
  const banners = ['Banner1', 'Banner2'];
  const brands = ['brand1', 'brand2'];
  const brands2 = ['brand1', 'brand2'];

  return (
    <>
      <Header />
      <h2>New Arrivals</h2>{/*placeholder*/}
      {/* <ProductCarousel>
      {products.map((item, index) => (
        <div className='item'>
          <div>
            <div className='item.image'>

            </div>
            <div className=''>

            </div>
          </div>
        </div>
      ))}
    </ProductCarousel>
    */}
      {/* <Carousel>
      {banners.map((banner, index) => (
        <img key={index} src={banner}></img>
      ))}
    </Carousel>
    SAMPLE CAROUSEL
    */}
      {/* <div className='flex row container'>
        <div className='image item1'>
          <button name='Shop Now'></button>
        </div>
        <div className='image item2'>
          <button name='Shop Now'></button>
        </div>
        <div className='image item3'>
          <button name='Shop Now'></button>
        </div>
      </div>

      <div className='flex row container'>
        <div className='item1'>
          <div className='flex row item'>
            <img />
            <div className='flex column item'>

            </div>
          </div>
        </div>

        <div className='item2'>
          <div className='flex row item'>
            <img />
            <div className='flex column item'>

            </div>
          </div>
        </div>

        <div className='item3'>
          <div className='flex row item'>
            <img />
            <div className='flex column item'>

            </div>
          </div>
        </div>

        <div className='item4'>
          <div className='flex row item'>
            <img />
            <div className='flex column item'>

            </div>
          </div>
        </div>

      </div>

      <div className='flex row container'>
        <div className='image item1'>
          <button name='Shop Now'></button>
        </div>
        <div className='image item2'>
          <button name='Shop Now'></button>
        </div>
        <div className='image item3'>
          <button name='Shop Now'></button>
        </div>
      </div> */}

      {/* <ProductLine>
      {products.map((item, index) => (
        <li key={index} className="p-2 border-b">
          {item}
        </li>
      ))}
    </ProductLine>
    SAMPLE PRODUCT LINE FOR Featured Laptops
    */}

      {/* <Carousel>
      {banners.map((banner, index) => (
        <img key={index} src={banner}></img>
      ))}
    </Carousel>
    SAMPLE CAROUSEL FOR LAPTOP BRANDS
    */}

      {/* <ProductLine>
      {products.map((item, index) => (
        <li key={index} className="p-2 border-b">
          {item}
        </li>
      ))}
    </ProductLine>
    SAMPLE PRODUCT LINE FOR Featured Computer Peripherals & Accessories
    */}

      {/* <div className='flex grid'>
        {brands.map((brand, index) => (
          <div className='image' src={'./' + brand + '.png'}>
            <button name='Shop Now'></button>
          </div>
        ))}
      </div>
      
      */}

      {/* <div className='flex row'>
        {brands2.map((brand2, index) => (
          <div className='image' src={'./' + brand2 + '.png'}>
            <button name='Shop Now'></button>
          </div>
        ))}
      </div>
      
      */}

      {/* <h3>Browse by Peripherals/ Accessories Type</h3> */}

      {/* <ProductLine>
      {products.map((item, index) => (
        <li key={index} className="p-2 border-b">
          {item}
        </li>
      ))}
    </ProductLine>
    SAMPLE PRODUCT LINE FOR Featured Gaming Monitors
    */}

      {/* <Carousel>
      {banners.map((banner, index) => (
        <img key={index} src={banner}></img>
      ))}
    </Carousel>
    SAMPLE CAROUSEL FOR LAPTOP BRANDS
    */}

      {/* <ProductLine>
      {products.map((item, index) => (
        <li key={index} className="p-2 border-b">
          {item}
        </li>
      ))}
    </ProductLine>
    SAMPLE PRODUCT LINE FOR Featured PC Parts & Components
    */}

      {/* 
          <h3>Browse by Parts/ Components Type</h3>
          <Carousel>
      {banners.map((banner, index) => (
        <img key={index} src={banner}></img>
      ))}
    </Carousel>
    SAMPLE CAROUSEL FOR LAPTOP BRANDS
    */}
      <footer>
        {/* INSERT FOOTER CONTENT HERE */}
      </footer>
    </>
  )
}

export default App
