import { useState, useEffect } from 'react';
import './ProductGallery.css'

function ProductGallery({ images }){
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery-layout">
      {/* Sidebar Thumbnails */}
      <div className="thumb-column">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`thumb-item ${selectedImage === img ? 'is-active' : ''}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main Feature Image */}
      <div className="feature-container">
        <img src={selectedImage} alt="Feature View" className="feature-img" />
        <div className="zoom-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Roll over image to zoom in
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;