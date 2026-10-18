import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';
import './index.css';
import { useState } from 'react';

function App() {
  const [isOpen,setIsOpen]=useState(false);
  const toggleSideBar=()=>{
    setIsOpen(prev=>!prev);
  };
  const closeSidebar=()=>{
    setIsOpen(false);
  };
  return (
    <div className={`app-shell ${isOpen?'sidebar-open':''}`}>
      <Navbar toggleSideBar={toggleSideBar}/>
      {isOpen && (
        <button
          className="sidebar-backdrop"
          onClick={closeSidebar}
          aria-label="Close sidebar"
          type="button"
        />
      )}
      <div className="app-layout">
        <Sidebar closeSidebar={closeSidebar}/>
        <Content />
      </div>
    </div>
  );
}

export default App;
