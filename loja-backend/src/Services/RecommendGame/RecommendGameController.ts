import { Request, Response } from "express";
import RecommendGame from "./RecommendGame";

export default class RecommendGameController {
    private recommendGame:RecommendGame;

    constructor(recommendGame:RecommendGame){
        this.recommendGame = recommendGame;
    }

    async handle(request:Request, response:Response){
        try {
            const games = await this.recommendGame.execute();
            return response.status(200).json(games);

        } catch (error) {
            return response.status(500).json({
                message: error || 'Unexpected Error'
            })
        }
    }
}