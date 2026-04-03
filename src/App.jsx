import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact' 

function App() {


  return (
    <>
    <NavBar />
    <main>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </main>
    
    </>
  )
}

export default App
