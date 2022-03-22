import React from 'react';

interface CardInterface {
  title:string;
  imageURL:string;
}

const CardComponent: React.FC<CardInterface> = ({title, imageURL}:CardInterface)=>{
    return (
      <div className="col s4 m4">
        <div className="card">
          <div className="card-image">
            <img src={imageURL}  />
            <span className="card-title"> {title} </span>
          </div>
        </div>
      </div>
      
    )
}

export default CardComponent