import React from "react";
export default function cards(props) {
  return (
    
    <div className="card subCards" >
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body cardDetails">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.year}</p>
    </div>
  </div>
 
  );
}
