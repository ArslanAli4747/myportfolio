import './Contact.scss'
import 'w3-css/w3.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [send,setsend] = useState(false);
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [message,setmessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_KEY)
      .then((result) => {
        setsend(true)
        setmessage("")
        setname("")
        setemail("")
          console.log(result.text);
          setInterval(()=>{
            setsend(false)
          },5000)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div className='contact'>
        
        <form ref={form} onSubmit={sendEmail}>
      <p>{process.env.REACT_APP_PKEY}</p>
      <label>Name</label>
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='enter name' name="user_name" />
      <label>Email</label>
      <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='enter email' name="user_email" />
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder='enter message' />
      <input className='button' type="submit" value="Send" />
    
    </form>
     { send && (
        <p >email sent</p>
      )
     }     
    </div>
  );
}

export default Contact
