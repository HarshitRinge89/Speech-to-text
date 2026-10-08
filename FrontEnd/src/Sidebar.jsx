import React from 'react';
import './index.css';
import {clsx} from "clsx"

function Sidebar({ isOpen, toggleSidebar }) {
  const className= clsx("sidebar",isOpen &&"open")
  return (
    <div className={className}>

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
              <svg className="icons"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/></svg>
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#my-notes">
            {isOpen ? (
              <span className="text">My Notes</span>
            ) : (
              <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M336 496L160 496C151.2 496 144 488.8 144 480L144 160C144 151.2 151.2 144 160 144L480 144C488.8 144 496 151.2 496 160L496 336L408 336C368.2 336 336 368.2 336 408L336 496zM476.1 384L384 476.1L384 408C384 394.7 394.7 384 408 384L476.1 384zM96 480C96 515.3 124.7 544 160 544L357.5 544C374.5 544 390.8 537.3 402.8 525.3L525.3 402.7C537.3 390.7 544 374.4 544 357.4L544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480z"/></svg>
            )}
          </a>
        </li>
        {/* <h3>Quick Actions</h3> */}
        <li className="menu-item">
          <a href="#new-recording">
            {isOpen ? (
              <span className="text">New Recording</span>
            ) : (
              <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C267 64 224 107 224 160L224 288C224 341 267 384 320 384C373 384 416 341 416 288L416 160C416 107 373 64 320 64zM176 248C176 234.7 165.3 224 152 224C138.7 224 128 234.7 128 248L128 288C128 385.9 201.3 466.7 296 478.5L296 528L248 528C234.7 528 224 538.7 224 552C224 565.3 234.7 576 248 576L392 576C405.3 576 416 565.3 416 552C416 538.7 405.3 528 392 528L344 528L344 478.5C438.7 466.7 512 385.9 512 288L512 248C512 234.7 501.3 224 488 224C474.7 224 464 234.7 464 248L464 288C464 367.5 399.5 432 320 432C240.5 432 176 367.5 176 288L176 248z"/></svg>
            )}
          </a>
        </li>

        <li className="menu-item">
          <a href="#upload-audio">
            {isOpen ? (
              <span className="text">Upload Audio</span>
            ) : (
              <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M176 544C96.5 544 32 479.5 32 400C32 336.6 73 282.8 129.9 263.5C128.6 255.8 128 248 128 240C128 160.5 192.5 96 272 96C327.4 96 375.5 127.3 399.6 173.1C413.8 164.8 430.4 160 448 160C501 160 544 203 544 256C544 271.7 540.2 286.6 533.5 299.7C577.5 320 608 364.4 608 416C608 486.7 550.7 544 480 544L176 544zM337 255C327.6 245.6 312.4 245.6 303.1 255L231.1 327C221.7 336.4 221.7 351.6 231.1 360.9C240.5 370.2 255.7 370.3 265 360.9L296 329.9L296 432C296 445.3 306.7 456 320 456C333.3 456 344 445.3 344 432L344 329.9L375 360.9C384.4 370.3 399.6 370.3 408.9 360.9C418.2 351.5 418.3 336.3 408.9 327L336.9 255z"/></svg>
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;