import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className='app-container'>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      <div className='main-layout'>
        <Sidebar 
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        <main className={`main-content ${isOpen ? 'open' : 'collapsed'}`}>
        <h1>test</h1></main>
      </div>
    </div>
    </>
  );
}

export default App;