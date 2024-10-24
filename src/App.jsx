import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <  />
      </header>
      <main className='flex'>
        <aside>
          < Sidebar />
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  )
}

export default App
