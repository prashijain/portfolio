import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import React from 'react'
import img1 from '../assets/project1.jpeg'
import img2 from '../assets/project1.jpeg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a React Developer . I create responsive 
                secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className="btn"> Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
<img src={img1} alt="img" className="img"/>
                </div>
                <div className="img-stack bottom">
<img src={img2} alt="img" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent