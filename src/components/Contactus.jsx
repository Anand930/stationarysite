import React from 'react'
import belowAbout from '../assets/BelowAbout.png'
import worldMap from '../assets/worldMap.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contactus = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='w-full text-center  bg-cover h-full ' style={{
                backgroundImage: `url(${worldMap})`,
            }}>
                <div className='bg-white/5 backdrop-blur-[2px]'>
                    <p className='text-3xl font-bold text-[#1a3cab]  underline-offset-4 pt-10 '><span className='text-[#da5637]'>Contact Us</span></p>
                    <div className='flex items-center justify-center mb-10'>
                        <img src={belowAbout} alt="belowAbout" srcset="" />
                    </div>
                    <div className='w-full ' >
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
                        <div className='max-w-full mx-auto flex flex-col py-10 gap-10'>
                            <div className='w-full flex px-20'>
                                <div className='flex flex-col w-1/2 mx-auto pr-5 gap-2'>
                                    <input type="text" className='border-2 w-full border-[#da5637] h-16 bg-white shadow-xl hover:cursor-pointer outline-none text-2xl px-2' />
                                    <input type="text" className='border-2 w-full border-[#da5637] h-16 bg-white shadow-xl hover:cursor-pointer outline-none text-2xl px-2' />
                                    <input type="text" className='border-2 w-full border-[#da5637] h-16 bg-white shadow-xl hover:cursor-pointer outline-none text-2xl px-2' />
                                </div>
                                <div className='w-1/2 pl-5'>
                                    <textarea type="text" className='border-2 border-[#da5637] w-full h-full bg-white shadow-xl hover:cursor-pointer outline-none text-2xl px-2' />
                                </div>
                            </div>
                            <div>

                                <button className='text-white bg-[#da5637] w-auto p-2 px-10 text-xl  hover:cursor-pointer border-2 border-[#db4321] rounded-xl hover:bg-white/90 hover:text-[#da5637] '> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus