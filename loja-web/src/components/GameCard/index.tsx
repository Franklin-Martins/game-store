import React from 'react';

interface IGameCard {
    title:string;
    description:string;
    imageURL:string;
}

const GameCard: React.FC<IGameCard> = ({ description, title, imageURL }:IGameCard)=>{
    return(
        <div className="col s4 m4">
            <div className="card">
                <div className="card-image">
                    <img src={imageURL} />
                </div>
                <div>
                    <h3 className='center'>{title}</h3>
                </div>
                <div className="card-content center">
                <p> {description} </p>
                </div>
                <div className="card-action center">
                <a href="/">Ver jogo</a>
                </div>
            </div>
        </div>
    )
}

export default GameCard;