import { Game } from "../../Entitites/Game";
import { IGameRepository } from "./IGameRepository";

export default class FakeGameRepository implements IGameRepository {
    private games:Game[] = [
        new Game('Metal Gear Solid V: The Phantom Pain', 'https://images.wallpapersden.com/image/download/the-phantom-pain-metal-gear-solid-v_amZubW2UmZqaraWkpJRmZ21lrWxnZQ.jpg', 'Metal Gear Solid V: The Phantom Pain é um jogo eletrônico de ação-aventura furtiva desenvolvido pela Kojima Productions, co-produzido pela Kojima Productions Los Angeles e realizado, desenhado, co-produzido e co-escrito por Hideo Kojima.'),
        new Game('BioShock', 'https://images.hdqwalls.com/download/bioshock-remastered-oi-1280x720.jpg', 'BioShock é uma série de videogame retrofuturista criada por Ken Levine, publicada pela 2K Games e desenvolvida por vários estúdios, incluindo Irrational Games e 2K Marin.'),
        new Game('The Last of Us', 'https://images.wallpapersden.com/image/download/the-last-of-us_a2xqaWeUmZqaraWkpJRmZ21lrWxnZQ.jpg', 'The Last of Us é uma franquia de jogos eletrônicos de ação-aventura e survival horror exclusiva da PlayStation, criada por Neil Druckmann. A franquia é situada em um mundo pós-apocalíptico, com seres humanos hostis e criaturas canibalísticas infectadas por uma mutação do fungo cordyceps.'),
        new Game('Batman: Arkham City', 'https://gamingbolt.com/wp-content/uploads/2019/10/batman-arkham-city-1280x720.jpg','Batman: Arkham City é um jogo eletrônico de Ação-Aventura e Stealth, baseado na série de quadrinhos Batman da DC Comics. O jogo é distribuído para: PlayStation 3, Xbox 360 e Microsoft Windows. Foi desenvolvido pela Rocksteady Studios e foi publicado pela Warner Bros. Interactive Entertainment e DC Entertainment.')
    ];
    
    async findAllGames(): Promise<Game[] | undefined> {
        return await this.games;
    }

    async findGameByName(name: string): Promise<Game| undefined> {
        const game =  await this.games.find(game => game.name === name);

        return game
    }
}