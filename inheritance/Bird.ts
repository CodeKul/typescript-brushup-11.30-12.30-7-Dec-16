export class Bird {
    /*private legs : number; //data type
    private flyingSpeed : Number; // wrapper of number
    private nameBird : String;*/

    public constructor(private legs? : number, private flyingSpeed? : number, private nameBird? : String){
        /*this.legs = legs;
        this.flyingSpeed = flyingSpeed;
        this.nameBird = nameBird;*/        
    }

    public getFlyingSpeed() : number {
        return this.flyingSpeed;
    }

    public getLegs() : number {
        return this.legs;
    }

    public getNameBird() : String {return this.nameBird;}

    public fly() : void {
        this.flyingSpeed += 5;
    }
}