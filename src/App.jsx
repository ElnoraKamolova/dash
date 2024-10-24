import { useState } from 'react'

import './App.css'
import Dashboard from './pages/Dashboard'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar/>
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
