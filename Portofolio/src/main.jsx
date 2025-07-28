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
  const [bg, setBg] = useState('#000')

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return
      const homeBottom = homeRef.current.getBoundingClientRect().bottom
      if (homeBottom < 100) {
        setBg('#fff')
      } else {
        setBg('#000')
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        background: bg,
        minHeight: '100vh',
        transition: 'background 0.5s',
      }}
    >
      <StrictMode>
        <div ref={homeRef}>
          <Home />
          <About />
        </div>
        <Experience visible={bg === "#fff"} />
        <Organization />
        <Projects />
        <Contacts />
      </StrictMode>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)