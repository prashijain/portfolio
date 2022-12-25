import "./WorkCardStyles.css"
import React from 'react';
import imgPro1 from '../assets/project1.jpeg';
import { NavLink,Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="Project Image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <button className="btn">
                <a href={props.view}>
                    View
                </a>
            </button>
            <button className="btn">
                <a href="https://www.google.com/">
                    Source
                </a>
            </button>
        </div>
    </div>
</div>
  )
}

export default WorkCard;