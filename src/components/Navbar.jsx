import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    useEffect(()=>{
        const handleScroll = () =>{
            setScrollY(window.scrollY)
            // console.log(window.scrollY)            
        }

        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    return (
        <div className={`py-4 ${scrollY>=5?"fixed bg-linear-to-r from-blue-900 to-blue-800 shadow-2xl w-full z-50 opacity-90":""}`}>
            <div className='flex items-center justify-between max-w-7xl mx-auto px-2 xl:px-0'>
                <div className="logo w-16 sm:w-auto" >
                    <img src={logo} alt="Logo" width={150} />
                </div>
                <div className="links hidden sm:block">
                    <ul className='flex md:gap-5 gap-2 items-center justify-center'>
                        <li className='md:p-0 hover:text-black text-white text-xs md:text-lg hover:cursor-pointer '>Home</li>
                        <li className='md:p-0 hover:text-black text-white text-xs md:text-lg hover:cursor-pointer '>About</li>
                        <li className='md:p-0 hover:text-black text-white text-xs md:text-lg hover:cursor-pointer '>Products</li>
                        <li className='md:p-0 hover:text-black text-white text-xs md:text-lg hover:cursor-pointer '>Contacts</li>
                    </ul>
                </div>
                <div className="social-links hidden sm:flex gap-2">
                    <TiSocialFacebook size={30} color='white' className='hover:border-white hover:border-2 rounded-full p-1 cursor-pointer'/>
                    <RiInstagramFill size={30} color='white' className='hover:border-white hover:border-2 rounded-full p-1 cursor-pointer'/>
                    <RiTwitterXLine size={30} color='white' className='hover:border-white hover:border-2 rounded-full p-1 cursor-pointer'/>
                </div>
                
                <div className='sm:hidden'>
                    <IoMenu className={menuClicked?"hidden":""} width={20} onClick={()=>setMenuClicked(!menuClicked)}/>
                    <IoClose className={!menuClicked?"hidden":""} width={20} onClick={()=>setMenuClicked(!menuClicked)} />
                </div>
                <div className={`sm:hidden absolute top-12 right-2 bg-white text-black p-2 opacity-50 hover:bg-[#ed572d] ${!menuClicked?"hidden":""}`}>
                    <ul className='flex flex-col gap-1 items-center justify-center '>
                        <li className='md:p-2 hover:text-white text-xs md:text-sm w-full text-center'>Home</li>
                        <li className='md:p-2 hover:text-white text-xs md:text-sm w-full text-center'>About</li>
                        <li className='md:p-2 hover:text-white text-xs md:text-sm w-full text-center'>Products</li>
                        <li className='md:p-2 hover:text-white text-xs md:text-sm w-full text-center'>Contacts</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar