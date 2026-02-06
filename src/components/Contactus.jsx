import React from 'react'
import belowAbout from '../assets/BelowAbout.png'
import worldMap from '../assets/worldMap.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contactus = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='w-full text-center py-20 '>
                <p className='text-3xl font-bold text-[#1a3cab]  underline-offset-4'><span className='text-[#da5637]'>Contact Us</span></p>
                <div className='flex items-center justify-center mb-10'>
                    <img src={belowAbout} alt="belowAbout" srcset="" />
                </div>
                <div className='w-full h-52' style={{
                    backgroundImage: `url(${worldMap})`,
                }}>
                    <div className='max-w-2xl mx-auto flex flex-col gap-3'>
                        <div className='flex items-center justify-center gap-2'>
                            <p className='text-[#da5637] flex gap-2 text-xl font-semibold items-center justify-center'><FaPhoneAlt color='#da5637' size={15} />   Phone:</p>
                            <p className='text-[#da5637] text-xl font-semibold'>+91 9085038459 </p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <p className='text-[#da5637] flex gap-2 text-xl font-semibold items-center justify-center'><FaPhoneAlt color='#da5637' size={15} />   Email:</p>
                            <p className='text-[#da5637] text-xl font-semibold'>www.mail.com </p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <p className='text-[#da5637] flex gap-2 text-xl font-semibold items-center justify-center'><FaPhoneAlt color='#da5637' size={15} />   Address:</p>
                            <p className='text-[#da5637] text-xl font-semibold'>www.mail.com </p>
                        </div>
                        
                        
                    </div>
                    <div className='max-w-full mx-auto flex'>
                        <div className='flex flex-col w-1/2 mx-auto'>
                            <input type="text" className='border-2 w-full border-blue-700' />
                            <input type="text" className='border-2 w-full border-blue-700' />
                            <input type="text" className='border-2 w-full border-blue-700' />
                        </div>
                        <div className='w-1/2'>
                            <input type="text" className='border-2 border-blue-700 w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus