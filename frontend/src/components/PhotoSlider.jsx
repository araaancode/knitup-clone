import React, { useState, useEffect } from 'react';

const PhotoSlider = ({ reverse = false }) => {
  const images = [
    'https://via.placeholder.com/800x500?text=Fashion+1',
    'https://via.placeholder.com/800x500?text=Fashion+2',
    'https://via.placeholder.com/800x500?text=Fashion+3',
    'https://via.placeholder.com/800x500?text=Fashion+4',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        reverse ? 
          (prevIndex === 0 ? images.length - 1 : prevIndex - 1) :
          (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [reverse, images.length]);

  return (
    <section className={`py-16 ${reverse ? 'bg-gray-100' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {reverse ? 'Customer Creations' : 'Featured Designs'}
        </h2>
        <div className="relative h-96 overflow-hidden rounded-xl">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlider;