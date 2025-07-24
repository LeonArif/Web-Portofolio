import './index.css'
import { StrictMode, useRef, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/sections/Home.jsx'
import About from './components/sections/About.jsx'
import Contacts from './components/sections/Contacts.jsx'
import Organization from './components/sections/Organization.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'

function App() {
  const homeRef = useRef(null)
  const [bg, setBg] = useState('#000') // hitam

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return
      const homeBottom = homeRef.current.getBoundingClientRect().bottom
      // Jika bagian bawah Home sudah lewat atas viewport, ubah bg jadi putih
      if (homeBottom < 100) {
        setBg('#fff')
      } else {
        setBg('#000')
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Jalankan langsung saat mount, biar bg sesuai posisi awal scroll
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        background: bg,
        minHeight: '100vh',
        transition: 'background 0.5s',
        // width: '100vw',
      }}
    >
      <StrictMode>
        <div ref={homeRef}>
          <Home />
          <About />
        </div>
        <Experience />
        <Organization />
        <Projects />
        <Contacts />
      </StrictMode>
    </div>
  )
}

// Render ke root
createRoot(document.getElementById('root')).render(<App />)