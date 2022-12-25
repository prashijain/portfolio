import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form >
            <label >Your Name</label>
            <input type="input" placeholder="Please type your name here"></input>
            <label >Email</label>
            <input type="input" placeholder="Please type your Email here"></input>
            <label >Subject</label>
            <input type="input" placeholder="Enter Subject"></input>
            <label >Message</label>
            <textarea rows='6' placeholder="Enter Message" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form
