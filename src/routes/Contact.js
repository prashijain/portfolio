import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';
import Form from '../components/Form';

export const Contact = () => {
  return (
    <div>
         <Navbar />
         <CenterImg heading ="Connect" text = "Let's have a chat"/>
         <Form />
        <Footer/>
    </div>
  )
}

export default Contact;
