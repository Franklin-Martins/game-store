import { Game } from "../../Entitites/Game";

export interface IGameRepository{
    findAllGames():Promise<Game[] | undefined>;
    findGameByName(name:string): Promise<Game|undefined>;
}