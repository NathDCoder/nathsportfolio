import React from 'react';
import Button from 'react-bootstrap/Button';
import Pic1 from '../../Assets/img1.jpeg';
import Pic2 from '../../Assets/img2.jpeg';
import Pic3 from '../../Assets/img3.jpeg';
import Pic4 from '../../Assets/img4.jpeg';
import Pic5 from '../../Assets/img5.jpeg';
import Pic6 from '../../Assets/img6.jpeg';

export default function Projects() {
  return (
    <>
    <div className='text'>
      <h1>Projects</h1>
      <img src={Pic1} alt='pic1'/>
      <img src={Pic2} alt='pic2'/>
      <img src={Pic3} alt='pic3'/>
      <img src={Pic4} alt='pic4'/>
      <img src={Pic5} alt='pic5'/>
      <img src={Pic6} alt='pic6'/>
    </div>

    <div>
    <Button className="button">
    <a className="button" href="/freelance.pdf" download = "freelance.pdf">
      Download Resume
    </a>
    </Button>
    </div>
    </>
  );
}
