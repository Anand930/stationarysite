import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Contactus from '../components/Contactus'
import Footer from '../components/Footer'


const Home = () => {

    return (
        <div id='Home'>
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
            <Footer/>
        </div>

    )
}

export default Home