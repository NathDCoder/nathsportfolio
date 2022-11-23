import React from 'react';
import Nav from 'react-bootstrap/Nav';


function Navigation({ currentPage, pageHandler }) {
    return (
        
            <Nav>
              <Nav.Item>
                <Nav.Link >
                <a href="home"
                onClick={() => pageHandler('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                Home
                </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                <a href="about" 
                onClick={() => pageHandler('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
                </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link> 
                <a href="contact"
                onClick={() => pageHandler('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
                </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link> 
                <a href="projects"
                onClick={() => pageHandler('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                Projects
                </a>
                </Nav.Link>
              </Nav.Item>
            </Nav>     
          );
        }
        
  
  export default Navigation;