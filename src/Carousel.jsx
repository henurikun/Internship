import { useState, Children } from 'react'
import './Carousel.css'

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);
  const visibleItems = 6;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= totalSlides - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - visibleItems : prev - 1
    );
  };
  return (
    <>
      <div className='Carousel-Wrapper'>
        {/* 1. The "Window" that hides the extra items */}
        <div className='Carousel-Window'>

          {/* 2. The "Track" that actually moves */}
          <div
            className='Carousel-Track'
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {children}
          </div>

        </div>

        {/* 3. Navigation Buttons (placed outside the window so they stay put) */}
        <button onClick={prevSlide} className="left button"> {" < "} </button>
        <button onClick={nextSlide} className="right button"> {" > "} </button>
      </div>
    </>
  )
}

export default Carousel