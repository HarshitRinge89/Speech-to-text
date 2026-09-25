import React from 'react';
const Sidebar=()=>{
    const [isOpen,setIsOpen]=React.useState(true);
    const toggleSidebar=()=>{
        setIsOpen(!isOpen);
    }
return(
    <div classname={`sidebar ${isOpen ? 'open':'collapsed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? '✕' : '☰'}
        </button>
        <nav className="sidebar-menu">
            <ul>
                <li><a href="#home">{isOpen ? <span className='text'>Home</span>:"H"}</a></li>
                <li><a href="#my-notes">{isOpen ? <span className='text'>My Notes</span>: "N"}</a></li>
                <li><a href="#create-new">{isOpen ? <span className='text'>Create New</span>: "+"}</a></li>
                <li><a href="#profile">{isOpen ? <span className='text'>Profile</span>:"👤"}</a></li>
                <li><a href="#settings">{isOpen ? <span className='text'>Settings</span>:"⚙️"}</a></li>
            </ul>
        </nav>
    </div>
);};
export default Sidebar