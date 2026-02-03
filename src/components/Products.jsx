import React from 'react'
import belowAbout from '../assets/BelowAbout.png'
import Card from './Card'

const Products = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='w-full text-center py-20'>
                <p className='text-3xl font-bold text-[#1a3cab]  underline-offset-4'><span className='text-[#da5637]'>Products</span></p>
                <div className='flex items-center justify-center'>
                    <img src={belowAbout} alt="belowAbout" srcset="" />
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Products