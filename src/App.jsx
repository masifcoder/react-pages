import { useState } from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Details from './pages/Details';

function App() {


  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/:id' element={<Details />} />
        </Routes>
      </div>

      footer
    </>
  )
}

export default App
