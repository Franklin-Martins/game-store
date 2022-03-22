import { Game } from "../../Entitites/Game";
import { IRecommend } from "../../Providers/Recommend/IRecommend";
import { IGameRepository } from "../../Repositories/GameRepository/IGameRepository";

export default class RecommendGame {
    private gameRepository:IGameRepository;
    private recommend:IRecommend;

    constructor(gameRepository:IGameRepository, recommend:IRecommend){
        this.gameRepository = gameRepository;
        this.recommend = recommend;
    }

    async execute():Promise<Game[]>{
        const names = await this.recommend.recommend();
        
        let games:Game[] = [];
        
        for (let i in names){
            let nameOfGame = names[i].split(',')[1];

            const game = await this.gameRepository.findGameByName(nameOfGame);

            if(game) games.push(game);
        }

        return games;
    }
}