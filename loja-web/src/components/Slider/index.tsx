import React from 'react';
import Slider  from 'react-slick';

interface IGameRecommended{
    name:string;
    imageURL:string;
}

const SliderComponent: React.FC<IGameRecommended[]> = (games:IGameRecommended[])=>{
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    return(
        <>
            <div className='container'>
            <Slider {...settings}>
                {games.map((game)=>{
                    return(
                        <img key={game.name} src={game.imageURL} 
                        width={120} height={450} alt="" 
                        />
                    )
                })}
            </Slider>
            </div>
        </>
    );
}

export default SliderComponent;