import { useState } from 'react'
import './css/Navbar.css';
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex justify-between items-center bg-gray-900 px-14 py-5">
        <div>
          <img className="w-8 h-8 rounded-full" src="src/assets/new arc.jpg" alt="pp" />
        </div>
        <div className="flex gap-14">
          <button className="px-2 py-1 rounded text-white underline-animate">HOME</button>
          <button className="px-2 py-1 rounded text-white underline-animate">ABOUT</button>
          <button className="px-2 py-1 rounded text-white underline-animate">PROJECTS</button>
          <button className="px-2 py-1 rounded text-white underline-animate">CONTACTS</button>
        </div>
      </nav>
    </>
  )
}