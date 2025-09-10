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
  const [showSVG, setShowSVG] = useState(false)
  const [transitionDuration, setTransitionDuration] = useState('0.7s')
  const lastScrollY = useRef(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return
      const homeBottom = homeRef.current.getBoundingClientRect().bottom

      // Deteksi arah scroll
      const currentScrollY = window.scrollY
      const isScrollingUp = currentScrollY < lastScrollY.current
      lastScrollY.current = currentScrollY

      // Atur durasi transisi berdasarkan arah scroll
      if (isScrollingUp) {
        setTransitionDuration('0.2s')
      } else {
        setTransitionDuration('0.7s')
      }

      setShowSVG(homeBottom < 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      style={{
        background: showSVG ? '#fff' : '#000',
        minHeight: '100vh',
        transition: 'background 0.5s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Overlay SVG */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          background: `url("/images/bg.svg") no-repeat center/cover`,
          opacity: showSVG ? 1 : 0,
          transition: `opacity ${transitionDuration} cubic-bezier(.4,0,.2,1)`,
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      <StrictMode>
        <div ref={homeRef} style={{ position: 'relative', zIndex: 2 }}>
          <Home />
          <About />
        </div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Experience visible={showSVG} />
          <Organization />
          <Projects />
          <Contacts />
        </div>
      </StrictMode>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)