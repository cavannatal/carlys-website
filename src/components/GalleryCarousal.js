import React, { useState, useEffect } from 'react';
import left_arrow from '../images/content/left-arrow.png';
import right_arrow from '../images/content/right-arrow.png';
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
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 3000); // Change slides every 3000 milliseconds (3 seconds)

        return () => clearInterval(timer); // Clear the interval on component unmount
    }, []);

    return (
        <div className='object-contain max-w-[600px] h-[900px] w-full m-auto py-16 px-4 relative'>
            <div style={{backgroundImage: `url(${slides[currentSlide]})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                {/* Optional: Place navigation buttons or indicators here */}
            </div>
            {/* Left Arrow*/}
            <div>
            
            </div>
            {/* Right Arrow*/}
            <div>

            </div>
        </div>
    );
}
