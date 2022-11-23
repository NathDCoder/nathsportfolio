import React from 'react';
import { DiVisualstudio} from "react-icons/di";
import { VscGithubAlt } from "react-icons/vsc";
import { SiMinutemailer } from "react-icons/si";
import '../Styles/Icons.css'

export default function Footer() {
  return (
    <div className='text'>
      <div>
    <DiVisualstudio className='Footer pointer-link' 
        onClick={() => window.open('https://code.visualstudio.com/download', '_blank')} />
      </div>
      <div>
      <VscGithubAlt className='Footer pointer-link'
        onClick={() => window.open('https://github.com/NathDCoder', '_blank')} />
      </div>
      <div>
      <SiMinutemailer className='Footer pointer-link' 
         onClick={() => window.open('https://gmail.com', '_blank')} />
      </div>
    </div>
  );
}
