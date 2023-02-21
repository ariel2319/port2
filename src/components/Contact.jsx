import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contact from '../../public/contact.svg'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    /* emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY') */
    emailjs.sendForm('service_dhku58c', 'template_qgdzvvh', form.current, 'C1Rz2JHdiGLYzvsGG')

      .then(() => {
        alert('Your email was sent successfully! ')
      }, (error) => {
        alert(error.text);
      });
  };

  return (
    <div className='container' id='contact'>
      <h2 className='subtitle'> MI CONTACTO </h2>
      <div className='n-contact'>
        <img src={contact} alt="" />
        <div >
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <label>Nombre</label>
            <input type="text" name="user_name" className='contact-input' />
            <label>Email</label>
            <input type="email" name="user_email" className='contact-input' />
            <label>Mensaje</label>
            <textarea name="message" cols={30} rows={8} />
            <input type="submit" value="Enviar" className='but-send' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;