export class Game {
    public name:string;
    public imageURL:string;
    public description:String;

    constructor(name:string, imageURL:string, description:string){
        this.name = name;
        this.imageURL = imageURL;
        this.description = description;
    }
}