import React from 'react';

const imageDeck = props => {
    return ( 
        <div className="card-deck">
        {props.children}
        </div>
     )
}
 
export default imageDeck;