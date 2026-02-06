import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contactus from '../components/Contactus'


const Home = () => {

    return (
        <div>
            <div className='bg-linear-to-r from-blue-900 to-blue-800'>
                <Navbar />
                <div className='max-w-7xl mx-auto px-2 xl:px-0'>

                    <div className='h-screen  text-white'>
                        <Hero />
                    </div>
                </div>
            </div>
            <About />
            <Products/>
            <Contactus/>
        </div>

    )
}

export default Home