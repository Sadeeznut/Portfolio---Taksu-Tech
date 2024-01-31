"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Impor Ikoni React

const ImageSlider: React.FC = () => {
  const images: string[] = [
    '/2.jpg',
    '/3.jpg',
    '/1.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleNextClick = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = (): void => {

    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick(); 
    }, 9000); 

    return () => clearInterval(interval);
  }, []); 

  return ( 
    <div className='pt-16' id='project'>
    <div className='2xl:px-36 lg:px-28 sm:px-16 px-14 md:relative w-[100%] mx-auto'>
      <div className="overflow-hidden relative">
        <div className="transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`, width: `${images.length * 100}%` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gambar ${index + 1}`}
              className="w-full h-auto object-cover inline-block"
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>
        
        <button onClick={handlePrevClick} className="bg-[#147CE5] rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-300">
          <FiChevronLeft />
        </button>

        <button onClick={handleNextClick} className="bg-[#147CE5] rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-300">
          <FiChevronRight />
        </button>
      </div>
      <div>
        </div>
    </div>
      <h1 className=" font-semibold text-center pb-4 lg:pb-8 pt-8 lg:pt-12 text-[#1D1D1F] 
      lg:text-4xl text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>MY PROJECT</h1>
    <div className="text-center pt-2 pb-80">
      {/* <Link href="/all" className="hover:scale-[1.05] duration-100 inline-flex items-center justify-center text-white h-8 bg-[#147CE5] px-2 py-1 rounded-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
        View More 
      </Link> */}
    </div>
    </div>
  );
};

export default ImageSlider;
