import React from "react";

const Card = (props) => {
  return (
    <div className="Maincard">
      <div className="Card">
        <div className="image">
          <h2>Hover me</h2>
          <img src={props.src} alt="s" />
        </div>
        <div className="details">
          <h2>{props.title}</h2>
          <p>{props.details}</p>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button>Link</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
