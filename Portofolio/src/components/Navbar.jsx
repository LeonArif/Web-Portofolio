import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './css/Navbar.css'

const navItems = [
  { label: 'ABOUT', hash: '/about' },
  { label: 'EXPERIENCE', hash: '/experience' },
  { label: 'ORGANIZATION', hash: '/organization' },
  { label: 'PROJECTS', hash: '/projects' },
  { label: 'CONTACTS', hash: '/contacts' },
]

export default function Navbar({ activePath, onNavigate }) {
  const buildPath = (path) => path
  const navTextClass = 'text-[10px] sm:text-[10px] md:text-sm lg:text-base'
  const navLabelClass = `${navTextClass} font-semibold tracking-[0.25em]`

  const handleNavClick = (path) => {
    if (typeof onNavigate === 'function') {
      onNavigate(buildPath(path))
    }
  }

  const renderNavItems = (buttonClass) => (
    navItems.map((item) => {
      const isActive = activePath === item.hash

      return (
        <button
          key={item.label}
          type="button"
          onClick={() => handleNavClick(item.hash)}
          className={`${buttonClass} ${isActive ? 'opacity-100' : 'opacity-80'}`}
        >
          {item.label}
        </button>
      )
    })
  )

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-4 md:px-8 lg:px-10">
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 text-white transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Go to top"
            >
              <img className="h-5 w-5" src="/images/navbar/pp.png" alt="Leonard logo" />
              <span className="text-[10px] font-semibold tracking-[0.25em]">LEONARD</span>
            </button>

            <a
              href="/doc/CV_Leonard%20Arif%20Sutiono.pdf"
              download="CV_Leonard_Arif_Sutiono.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.25em] text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-gray-200"
            >
              <FontAwesomeIcon icon={faDownload} className="h-3 w-3" />
              CV
            </a>
          </div>

          <div className="mt-3 border-t border-white/10 pt-3">
            <div className="overflow-x-auto scrollbar-none">
              <div className="flex w-max min-w-full items-center justify-start gap-4 px-0.5">
                {renderNavItems('whitespace-nowrap rounded px-1 py-1 text-[10px] font-semibold tracking-[0.22em] text-white underline-animate transition-opacity hover:opacity-100')}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 justify-self-start text-white transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Go to top"
          >
            <img className="h-6 w-6" src="/images/navbar/pp.png" alt="Leonard logo" />
            <span className={navLabelClass}>LEONARD</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 justify-self-center md:gap-x-5 lg:gap-x-8">
            {renderNavItems(`whitespace-nowrap rounded px-1 py-1 ${navLabelClass} text-white underline-animate transition-opacity hover:opacity-100`)}
          </div>

          <a
            href="/doc/CV_Leonard%20Arif%20Sutiono.pdf"
            download="CV_Leonard_Arif_Sutiono.pdf"
            className={`inline-flex items-center justify-self-end gap-2 rounded-full border border-white/20 bg-white px-3 py-1.5 font-bold tracking-[0.3em] text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-gray-200 ${navTextClass}`}
          >
            <FontAwesomeIcon icon={faDownload} className="h-3 w-3" />
            CV
          </a>
        </div>
      </nav>
    </header>
  )
}