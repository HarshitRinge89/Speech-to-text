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
        {/* <h3>Quick Actions</h3> */}
        <li className="menu-item">
          <a href="#new-recording">
            {isOpen ? (
              <span className="text">New Recording</span>
            ) : (
              'N'
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#upload-audio">
            {isOpen ? (
              <span className="text">Upload Audio</span>
            ) : (
              'U'
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;