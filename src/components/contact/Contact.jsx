import './contact.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
        email,
        message,
    };
    
    emailjs.send("service_dir750i", "template_m224s1c", templateParams, "k2O5a1s8kkwPa8qoE")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src="assets/shake.svg" alt='contact' />
      </div>
      <div className='right'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} ></input>
          <textarea placeholder='comments' onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Contact