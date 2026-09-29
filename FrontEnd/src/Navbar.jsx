import React from 'react';
import './index.css'
function Navbar({toggleSidebar,isOpen}){
    return(
        <nav className={`navbar ${isOpen ? 'sidebar-open':'sidebar-closed'}`}>
            <div className='navbar-left'>
                <button className='nav-toggle-btn' onClick={toggleSidebar}>
                    ☰
                </button>
                <span className='title'>Speech-to-text</span>
            </div>
            <div className='navbar-right'>
                <span>User profile</span>
            </div>
        </nav>
    );
}
export default Navbar;