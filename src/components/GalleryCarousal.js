import React, { useState, useEffect } from 'react';
import image1 from '../images/content/galleryimages/image1.jpg';
import image2 from '../images/content/galleryimages/image2.JPG';
import image3 from '../images/content/galleryimages/image3.JPG';
import image4 from '../images/content/galleryimages/image4.jpg';
import image5 from '../images/content/galleryimages/image5.jpg';
import image6 from '../images/content/galleryimages/image6.JPG';
import image7 from '../images/content/galleryimages/image7.jpg';


const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
]

export default function GalleryCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className='object-scale-down h-67.5 w-72' />
        </div>
    );
}

