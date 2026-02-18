import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as XLSX from 'xlsx';
import ProductLineLayout from './ProductLineLayout.jsx'
import Carousel from './Carousel.jsx'
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const banners = ['./public/332117591_570042271509661_1379602674492217920_n.png', 'Banner2'];
  const brands = ['brand1', 'brand2'];
  const brands2 = ['brand1', 'brand2'];

  // useEffect(() => {
  //   const fetchExcelData = async () => {
  //     // 1. Fetch the file from the public folder
  //     const response = await fetch('../4rmtech 021126.xlsx');
  //     const data = await response.arrayBuffer();

  //     // 2. Parse the Excel file
  //     const workbook = XLSX.read(data, { type: 'array' });

  //     // 3. Get the first sheet
  //     const sheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[sheetName];

  //     // 4. Convert sheet to JSON
  //     const json = XLSX.utils.sheet_to_json(worksheet);
  //     const limitedProducts = json.slice(0, 10);
  //     setProducts(limitedProducts);
  //   };

  //   fetchExcelData();
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* The :category part is a variable placeholder */}
        <Route path="/item/:id" element={<Item />} />
      </Routes>
      <Header />
      <div className='supercontainer'>
        <h2>New Arrivals</h2>
        <ProductLineLayout title="Featured Laptops" >
          <div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div>
          <div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div>
          <div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div>
          <div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div>
          <div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div>
          <div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div><div style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2016/07/28/02/02/greece-1546902_960_720.jpg')"
          }}></div>
        </ProductLineLayout>
        {/* <Carousel>
        {banners.map((banner, index) => (
          <img key={index} src={banner} />
        ))}
      </Carousel> */}
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
      </div>
      <footer>
        {/* INSERT FOOTER CONTENT HERE */}
      </footer>
    </>
  )
}

export default App
