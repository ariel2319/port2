import React from 'react';
import contact from '../../public/contact.svg'

const Contact = () => {
  return (
    <div className='container' id='contact'>
      <h2 className='subtitle'> MI CONTACTO </h2>
      <img src={contact} alt="" />
    </div>
  );
};

export default Contact;