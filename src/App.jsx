import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import SkillSet from './components/SkillSet'
import Proyects from './components/Proyects'
import Contact from './components/Contact'

function App() {

  return (
    <main className='bg-[#282C33]'>
      <Header/>
      <Home/>
      <About/>
      <SkillSet/>
      <Proyects/>
      <Contact/>
    </main>
  )
}

export default App
