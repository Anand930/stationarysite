import React from 'react'
import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'


function App() {

  return (

    <div className=''>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


    </div>

  )
}

export default App
