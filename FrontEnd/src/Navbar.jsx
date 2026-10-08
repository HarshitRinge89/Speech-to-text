import React from 'react';
import './index.css'
function Navbar({toggleSidebar,isOpen}){
    return(
        <nav className={`navbar ${isOpen ? 'sidebar-open':'sidebar-closed'}`}>
            <div className='navbar-left'>
                {/* <button className='nav-toggle-btn' onClick={toggleSidebar}>
                    ☰
                </button> */}
                <span className='title'>Speech-to-text</span>
            </div>
            <div className='navbar-right'>
                <div className='dropdown'>
                    <button class="dropbtn" aria-haspopup="true" aria-expanded="false">User</button>
                    <div id="dropbutton"class="dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Settings</a>
                        <a href="#">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;