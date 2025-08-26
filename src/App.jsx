import { useState } from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Profile from './pages/Profile';

function App() {


  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/products/:id' element={<Details />} />

          <Route path='/dashboard' element={ <ProtectedRoutes> <Dashboard /> </ProtectedRoutes>  } />
          <Route path='/profile' element={ <ProtectedRoutes> <Profile /> </ProtectedRoutes>  } />

          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>

      footer
    </>
  )
}

export default App
