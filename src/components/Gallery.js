import React from "react";
import GalleryCarousal from "./GalleryCarousal";
import image1 from '../images/content/galleryimages/image1.png';
import image2 from '../images/content/galleryimages/image2.png';
import image3 from '../images/content/galleryimages/image3.JPG';
import image4 from '../images/content/galleryimages/image4.png';
import image5 from '../images/content/galleryimages/image5.png';
import image6 from '../images/content/galleryimages/image6.JPG';
import image7 from '../images/content/galleryimages/image7.jpg';


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
]


const Gallery = () => {
    return (
        <div className='md:px-5 p-4 pt-36 max-w-screen-2xl mx-auto mt-100'>
            
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className="lg:w-1/3 pl-10 ">
                    <h2 className='pt-10 pb-2 text-4xl font-bold text-custom-darkpurple'>Why should you let me cut and style your hair?</h2>
                    <p className='pt-10 text-xl font-semibold'>All of my clients come in and leave with a big smile and sexy haircut. I will make you walk out looking like a superstar!</p>
                    </div>
                    {/**Client Cards */}
                    <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>

                        <div className='bg-blue rounded-[35px] h-100 shadow-2xl p-8 i items-center flex justify-center
                        transition-all duration-300 hover:-translate-y-4 cursor-pointer'>
                            
                            <div>
                                <img src={image4} className='object-scale-down h-67.5 w-72' alt=''/>
                                <h3 className='text-black text-l font-semibold px-5 py-2 text-center'>"Preston so Sexy" -Julie</h3>
                            </div>
                        </div>
                        <div className=' rounded-[35px] h-100 shadow-2xl p-8 i items-center flex justify-center
                        transition-all duration-300 hover:-translate-y-4 cursor-pointer md:mt-16'>
                            
                            <div>
                                <img src={image2} className='object-scale-down h-67.5 w-72' alt=''/>
                                <h3 className='text-black text-l font-semibold px-5 text-center'>"Oh Yeah Sister!" -Megan</h3>
                            </div>
                        </div>
                        <div className='bg-blue rounded-[35px] h-100 shadow-2xl p-8 i items-center flex justify-center
                        transition-all duration-300 hover:-translate-y-4 cursor-pointer'>
                            
                            <div>
                                <img src={image5} className='object-scale-down h-67.5 w-72' alt=''/>
                                <h3 className='text-black text-l font-semibold px-5 text-center'>"BLack Hair is cool!" -Hailey</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <GalleryCarousal/>
        
        
        </div>
    )        
}

export default Gallery;

