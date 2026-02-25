import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css';

function Carousel({ children }) {
  return (
    <Swiper
      // Instead of 'new Swiper', we pass settings as props
      height={400}
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={5}
      slidesPerView={3} // Shows 6 items at a time
      navigation
      loop={false}
    >
      {/* CRITICAL: Each item in your products array 
         MUST be wrapped in a <SwiperSlide> 
      */}
      {children.map((child, index) => (
        <SwiperSlide key={index}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;