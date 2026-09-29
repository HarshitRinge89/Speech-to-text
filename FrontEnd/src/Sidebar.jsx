import React from 'react';
import './index.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>

      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <ul className="sidebar-menu">

        <li className="menu-item">
          <a href="#home">
            {isOpen ? (
              <span className="text">Home</span>
            ) : (
              'H'
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#my-notes">
            {isOpen ? (
              <span className="text">My Notes</span>
            ) : (
              'N'
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#create-new">
            {isOpen ? (
              <span className="text">Create New</span>
            ) : (
              '+'
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#profile">
            {isOpen ? (
              <span className="text">Profile</span>
            ) : (
              '👤'
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#settings">
            {isOpen ? (
              <span className="text">Settings</span>
            ) : (
              '⚙️'
            )}
          </a>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;