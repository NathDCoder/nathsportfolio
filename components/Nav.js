import React from 'react';

function Navig({ currentPage, pageHandler }) {
    return (
      <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#home"
            onClick={() => pageHandler('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
            Home
        </a>
      </li>

        <li className="nav-item">
          <a
            href="#about"
            onClick={() => pageHandler('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
        </a>
      </li>

      <li className="nav-item">
          <a
            href="#contact"
            onClick={() => pageHandler('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
        </a>
      </li>

      <li className="nav-item">
          <a
            href="#projects"
            onClick={() => pageHandler('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
            Project
        </a>
      </li>
      </ul>
     );
    }

    export default Navig;