import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Hiring from './Pages/Hiring/Hiring'
import Investor from './Pages/Investor/Investor'
import Leads from './Pages/Leads/Leads'
import Advertise from './Pages/Advertise/Advertise'
import Listing from './Pages/Listing/Listing'
import Navbar from  './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hiring' element={<Hiring />} />
        <Route path='/investor' element={<Investor />} />
        <Route path='/leads' element={<Leads />} />
        <Route path='/advertise' element={<Advertise />} />
        <Route path='/listing' element={<Listing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App