import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <header>
      <img src="https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/ico/Globe2.ico" alt="globe icon"/>
      <span>Speech-to-Text</span>
    </header>
    <Sidebar isOpen={isOpen ? 'sidebar-open' : 'sidebar-collapsed'}/>
    <main className={`main-content ${isOpen ? 'open' : 'collapsed'}`}>
    <h1>test</h1></main>
    </>
  )
}

export default App
