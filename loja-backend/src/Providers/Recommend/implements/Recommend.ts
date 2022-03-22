import axios from "axios";
import { IRecommend } from "../IRecommend";

export class Recommend implements IRecommend{
    async recommend(): Promise<string[]> {
        let games:string[] = [];
        const result = await axios.get('http://localhost:5000/recommend');
        for( var key of Object.entries(result.data)){
            let name = key.toString()
            games.push(name);
        }

        return games;
    }
}