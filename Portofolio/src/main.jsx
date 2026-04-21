import './index.css'
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Contacts from './sections/Contacts.jsx'
import Organization from './sections/Organization.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'

const HOME_SECTION_IDS = new Set(['about', 'skills', 'organization', 'contacts'])

function parseRoute(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const routeName = normalizedPath === '/' ? '/' : normalizedPath.slice(1)

  if (normalizedPath === '/' || routeName === 'home') {
    return { page: 'home', target: null }
  }

  if (routeName === 'projects') {
    return { page: 'projects', target: null }
  }

  if (HOME_SECTION_IDS.has(routeName)) {
    return { page: 'home', target: routeName }
  }

  return { page: 'home', target: null }
}

function App() {
  const [route, setRoute] = useState(() => parseRoute(window.location.pathname))

  useEffect(() => {
    const syncRoute = () => setRoute(parseRoute(window.location.pathname))

    window.addEventListener('popstate', syncRoute)
    syncRoute()

    return () => {
      window.removeEventListener('popstate', syncRoute)
    }
  }, [])

  useEffect(() => {
    if (route.page === 'projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (!route.target) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetElement = document.getElementById(route.target)

    if (!targetElement) return

    window.requestAnimationFrame(() => {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [route.page, route.target])

  const scrollToPath = (path) => {
    const routeInfo = parseRoute(path)

    if (routeInfo.page === 'projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (!routeInfo.target) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetElement = document.getElementById(routeInfo.target)

    if (!targetElement) return

    window.requestAnimationFrame(() => {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const handleNavigate = (nextPath) => {
    if (window.location.pathname === nextPath) {
      scrollToPath(nextPath)
      return
    }

    window.history.pushState({}, '', nextPath)
    setRoute(parseRoute(window.location.pathname))
  }

  const activePath = route.page === 'projects'
    ? '/projects'
    : route.target
      ? `/${route.target}`
      : null

  return (
    <div
      style={{
        background: '#000',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Navbar activePath={activePath} onNavigate={handleNavigate} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {route.page === 'projects' ? (
          <Projects />
        ) : (
          <>
            <Home />
            <About />
            <Skills />
            <Organization />
            <Contacts />
          </>
        )}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)