

export class Recipe{
    public name: String;
    public description : String;
    public imagePath: String;

    construtor(name:String , desc:String , imagePath: String){
        this.name = name;
        this.description =  desc;
        this.imagePath = imagePath;
    }
}