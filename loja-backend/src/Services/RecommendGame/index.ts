import { Recommend } from "../../Providers/Recommend/implements/Recommend";
import FakeGameRepository from "../../Repositories/GameRepository/FakeGameRepository";
import RecommendGame from "./RecommendGame";
import RecommendGameController from "./RecommendGameController";

const fakeGameRepository = new FakeGameRepository;
const recommend = new Recommend;

const recommendGame = new RecommendGame(fakeGameRepository, recommend);

const recommendGameController = new RecommendGameController(recommendGame);

export { recommendGame, recommendGameController }