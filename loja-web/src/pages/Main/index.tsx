import React, { useState } from 'react';

import Navigation from '../../components/Navigation';
import SliderComponent from '../../components/Slider';

interface IGameRecommended{
    name:string;
    imageURL:string;
}

const Main: React.FC = () =>{
    const [games, setGames] = useState<IGameRecommended[]> ([
        {name:'Read Dead', imageURL:'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/02/maxresdefault-1.jpg'}
    ])
    return(
        <>
        <Navigation/>
        <div className="container">

        <div className="row">
        <h3 className='center'>Jogos Recomendados:</h3>
        <SliderComponent  {...games} />
        </div>
        </div>

        
        </>
    );
}

export default Main;