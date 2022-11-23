
import React, { useState } from 'react';
import './style.css';

import { validateEmail } from '../util/helpers';

function Form() {


  const [email, setEmail] = useState('');
  const [Name, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
   
    e.preventDefault();

    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email or username is invalid');
    
      return;

    }

    alert(`Hello ${Name}`);

    setUserName('');
    setEmail('');
  };

  return (
    <div>
      <p>Hello {Name}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={Name}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
