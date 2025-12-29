import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/sections/Home.jsx'
import About from './components/sections/About.jsx'
import Contacts from './components/sections/Contacts.jsx'
import Organization from './components/sections/Organization.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'

function App() {
  return (
    <div
      style={{
        background: '#000',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Home />
        <About />
        <Experience />
        <Organization />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)