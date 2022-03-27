import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Navigation from '../../components/Navigation';
import { ListGroup, ListGroupItem } from 'reactstrap'
import './index.css'
interface IGameRecommended{
    name:string;
    imageURL:string;
}

const Main: React.FC = () =>{
    const [games, setGames] = useState<IGameRecommended[]> ([])

    useEffect(()=>{
        async function loadRecommended(){
            const response = await api.get('/recommend');
            console.log(response.data)
            setGames(response.data)
        }

        loadRecommended();
    }, []);
    return(
        <>
        <Navigation/>
        <div className="container">
            <img src="https://images.wallpapersden.com/image/download/the-last-of-us-remastered_a2tsbGuUmZqaraWkpJRmZ21lrWxnZQ.jpg" alt="" />
        <p className="h3"> Recomendados para você </p>
        <div className='fixed'>
        <ListGroup horizontal>
            {games.map((game)=>{
                return(
                    <div className="item">

                    <ListGroupItem
                    
                    href="#"
                    tag="a"
                    >
                        <img src={game.imageURL} alt="" width={350}/>
                        <p className='h5'> {game.name} </p>
                    </ListGroupItem>
                    </div>
                )
            })}
        </ListGroup>
        </div>
        </div>
        </>
    );
}

export default Main;