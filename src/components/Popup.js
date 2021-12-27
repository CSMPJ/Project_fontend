
import React from "react";
import './Popup.css'
import image from './ดาวน์โหลด.png';
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}

        <img src={image} height={400} width={300} className ='image'/>
      </div>
    </div>
  );
};
 
export default Popup;