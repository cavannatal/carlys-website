import React, { useState, useEffect } from "react";
import CarlyPhoto from "../images/content/carly_profile.png";
import BookAppBtn from './BookAppBtn';



const HomeScreen = () => {
    return(
    <div className='md:px-5 p-4 max-w-screen-2xl mx-auto mt-100'>
        <div className='bg-pink-purple-gradient rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items center gap-10'>
                {/* Carly Photo */}
                <div>
                    <img src={CarlyPhoto} alt='Carly Headshot' className='object-scale-down h-67.5 w-72'/>
                </div>
                
                {/* Banner Content */}
                <div className='md:w-3/5 flex flex-col justify-center'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-[110px]'>Styles by Carly</h2>
                    <p className='text-white text-2xl mb-8'>Haircuts and hair and shit. So book an Appointment Today and let me cook.</p>
                    <div>
                        {/* Insert Custom Component Right here for Contact Button to scroll down*/}
                        <BookAppBtn/>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeScreen;