import React from 'react'
import belowAbout from '../assets/BelowAbout.png'
import stationary1 from '../assets/stationary1.jpg'

const About = () => {
  return (
    <div className='' style={{
      backgroundImage: `url(${stationary1})`,
    }}>
      <div className='max-w-7xl mx-auto' >
        <div className='w-full text-center py-20'>
          <p className='text-3xl font-bold text-[#1a3cab]  underline-offset-4'>About <span className='text-[#da5637]'>Us</span></p>
          <div className='flex items-center justify-center'>
            <img src={belowAbout} alt="belowAbout" srcset="" />
          </div>
        </div>

        <div className='pb-10'>
          <p className='px-4 sm:px-0 md:text-2xl text-white pb-10 text-center'>Jay Ambe Enterprise is a trusted trading firm based in Kadi, Gujarat, dedicated to supplying a wide range of high-quality products to businesses across India. We specialize in goods trading, stationery supplies, housekeeping products, machinery spare parts, and customized labels and stickers. </p>

          <p className='px-4 sm:px-0 md:text-2xl text-white text-center'> With a strong focus on quality, competitive pricing, and timely delivery, we aim to become a reliable partner for our clients’ everyday business needs. Our commitment to honest dealings, consistent service, and customer satisfaction helps us build long-term relationships with organizations nationwide.</p>
        </div>
        <div className='flex items-center justify-center pb-20'>

          <button className='p-2 bg-[#da5637] text-xl text-white px-4 hover:border-2 border-white rounded-xl'>See More...</button>
        </div>
      </div>
    </div>

  )
}

export default About