import "./FormStyles.css"
import './FormStyles.css';
import emailjs from '@emailjs/browser';
import React,{useState} from 'react'

  const Form = () => {

    const[status,setStatus] = useState("submit");
    const handleSubmit = (e) =>{
      e.preventDefault();
     setStatus("submitted");
      emailjs.sendForm('service_mo069zp','template_0n2mujf',e.target,'jpxH39pugGdBr6aXO');
    }
  return (

        <form onSubmit={handleSubmit} className='form'>
          
          <label htmlFor="name">Name</label>
            <input type="input" name ="name_from" id="name_from" placeholder="Enter Your Name"></input>

            <label htmlFor="email">Email</label>
            <input type="input" id="email_from" name="email_from" placeholder="Enter Your Email"></input>
    
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Enter Your Message"/>
            <button className="btn">{status}</button>
        </form>
  )
}

export default Form;