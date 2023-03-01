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
        <div className='contact-squad'>
          <h2 style={{color: "white", fontWeight: "400", textAlign: "center"}}>Aquí tu mensajito 👇🏽 </h2>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <label style={{fontWeight: "400"}}>Nombre</label>
            <input type="text" name="user_name" className='contact-input' />
            <label style={{fontWeight: "400"}}>Email</label>
            <input type="email" name="user_email" className='contact-input' />
            <label style={{fontWeight: "400"}}>Mensaje</label>
            <textarea name="message" cols={30} rows={8} className='contact-ta' placeholder=' -. Escribe aquí tu consulta .-'/>
            <input type="submit" value="Enviar" className='but-send' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;