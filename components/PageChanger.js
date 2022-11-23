import React, { useState } from 'react';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Projects';
import Home from './Pages/Home';
import Navigation from './Nav2';



function PageChanger () {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Projects') {
      return <Project />
    }
    if (currentPage === 'Home') {
      return <Home />
    }
  };


  const pageHandler = (pages) => setCurrentPage(pages);

  return (
    <>
    <div>
      <Navigation currentPage={currentPage} pageHandler={pageHandler} />
      {renderPage()}
    </div>
    </>
  );
}

export default PageChanger;