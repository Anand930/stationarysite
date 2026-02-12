import React from 'react'
import belowAbout from '../assets/BelowAbout.png'
import ProductCard from './ProductCard'
import stationary2 from '../assets/stationary2.jpg'
import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import "swiper/css/navigation";
import { FaGreaterThan } from "react-icons/fa";


const Products = () => {
    const cardData = [
        {
            title: "Stationery",
            img: "https://source.unsplash.com/300x200/?stationery",
        },
        {
            title: "Printer",
            img: "https://source.unsplash.com/300x200/?printer",
        },
        {
            title: "Office",
            img: "https://source.unsplash.com/300x200/?office",
        },
        {
            title: "Paper",
            img: "https://source.unsplash.com/300x200/?paper",
        },
    ];
    return (
        <div className='max-w-7xl mx-auto' id='Product'> 
            <div className='w-full text-center py-20 px-10 '>
                <p className='text-3xl font-bold text-[#1a3cab]  underline-offset-4'><span className='text-[#da5637]'>Products</span></p>
                <div className='flex items-center justify-center mb-10'>
                    <img src={belowAbout} alt="belowAbout" srcset="" />
                </div>
                <Swiper
                    className='px-10 flex'
                    modules={[Navigation]}

                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation={{
                        nextEl: ".next-btn",
                        prevEl: ".prev-btn",
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cardData.map((card, index) => (
                        <SwiperSlide key={index} >
                            <Card className='cursor-pointer rounded-2xl hover:shadow-2xl hover:scale-95 transition-transform duration-500 ease-in-out will-change-transform border-[1px] border-[#1a3cab]'>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={stationary2}
                                />
                                <CardContent>
                                    <Typography>{card.title}</Typography>
                                </CardContent>
                            </Card>

                        </SwiperSlide>
                    ))}
                    <div className='flex w-full mx-auto items-center justify-center gap-5 mt-5'>

                        <Button className='prev-btn '><FaGreaterThan color='#1a3cab' size={50} className='rotate-180 bg-[#da5631] p-2 rounded-full' /></Button>
                        <Button className='next-btn'><FaGreaterThan color='#1a3cab' className='bg-[#da5631] p-2 rounded-full' size={50} /></Button>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default Products