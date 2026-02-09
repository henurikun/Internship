import { useState } from 'react'
import Carousel from './Carousel.jsx'
import './ProductLineLayout.css'

function ProductLineLayout({ children , title = "Featured Items", link = ""}) {
  const [count, setCount] = useState(0);
    return (
        <>
        <div className='productline' style={{ backgroundImage: `url('${link}')` }}>
          <h3 className='title'>{title}</h3>
            <Carousel>
              {children}
            </Carousel>
        </div>
    </>
    )
}

export default ProductLineLayout