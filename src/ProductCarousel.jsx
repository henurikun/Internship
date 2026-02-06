import { useState, Children } from 'react'
import './ProductCarousel.css'

function ProductCarousel({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Children.count(children);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalSlides - 1 : prev - 1
        );
    };
    return (
        <>
            <div>

            </div>
        </>
    )
}

export default ProductCarousel