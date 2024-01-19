import React, { useState, useEffect } from "react";
import MenuIcon from '../images/content/main-menu.png';
import ExitIcon from '../images/content/close.png';
import ScissorIcon from '../images/content/scissoricon.png';
import InstagramBtn from "./InstagramBtn";
import AppBtn from './AppBtn';
import App from "../App";



const NavBar = () => {
    let Links=[
        {name:'Gallery',link:'/'},
        {name:'Contact',link:'/'},
    ]

    let [isOpen, setisOpen] = useState(false);
    let [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className='bg-white sticky shadow-md w-full fixed top-0 left-0 mb-10 z-50'> {/* Added z-50 */}
            <div className='md:px-3 py-6 px-4 md:flex justify-between items-center
            bg-white'>
                <div className='flex text-2xl cursor-pointer items-center gap-2 ml-4'>
                    <span className='font-bold '>Carly's Cosmetics</span>
                    <img src={ScissorIcon} alt ='ScissorIcon' className='h-8 w-auto'/>
                </div>
                
                <div onClick={() => setisOpen(!isOpen)} className='w-5 h-5 absolute right-8 top-8 cursor-pointer md:hidden'>
                    {
                        isOpen ? <img src ={ExitIcon}  alt ='ExitIcon'/> : <img src ={MenuIcon}  alt ='MenuIcon'/>
                    }
                </div>
                
                {/* Nav Links add drop down Animation if you want*/}
                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static 
                bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                translate-all ${isOpen && windowWidth < 768? 'top-12 shadow-md ': 'top-[-490px]'}
                `}>
                    {
                        Links.map(link => (
                        <li className='transition font-semibold my-7 md:my-0 md:ml-8 mr-10 hover:scale-105 hover:text-[#FB6F92]'>
                            <a href='/'>{link.name}</a>
                        </li>))
                    }
                    <InstagramBtn/>
                    <AppBtn/>
                </ul>
            </div>
        </header>
        
    );
};
export default NavBar;