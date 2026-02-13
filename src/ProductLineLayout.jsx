import { useState } from 'react'
import Carousel from './Carousel.jsx'
import './ProductLineLayout.css'

function ProductLineLayout({ children , title = "Featured Items", link = ""}) {
  const [count, setCount] = useState(0);
    return (
        <>
        <div className='productline' style={{ backgroundImage: `url('${link}')` }}>
          <div><h2 className='title'>{title}</h2>
            <div className='button'>Browse</div>
          </div>
            <Carousel>
              {children}
            </Carousel>
        </div>
    </>
    )
}

export default ProductLineLayout