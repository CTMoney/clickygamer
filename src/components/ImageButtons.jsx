import React from "react";

const ImageButtons = props => {
  return (
    <div className="card-deck">
      {props.images.map( (image) => {
        console.log(image)
        return (
          <div class="card">
           <img class="card-img-top" name={image.name} src={image.url} alt={image.name} data-clicked={false} onClick={props.handleClick} value={0}></img>
          </div>
        )
      })}
    </div>
  );
};

export default ImageButtons;

