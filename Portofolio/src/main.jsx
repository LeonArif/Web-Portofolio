import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/sections/Home.jsx'
import Navbar from './components/sections/Navbar.jsx'
import About from './components/sections/About.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar />
    <Home />
    <About />


  </StrictMode>
)
