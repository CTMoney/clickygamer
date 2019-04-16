import React from "react";

const ImageButtons = props => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        id={props.id}
        name={props.name}
        src={props.image}
        alt={props.name}
        onClick={props.handleClick}
      />
    </div>
  );
};

export default ImageButtons;
