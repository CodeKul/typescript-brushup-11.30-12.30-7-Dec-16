import { Bird } from './Bird';
export class Eagle /*is a bird*/ extends Bird{

    private diveSpeed : number;

    public constructor(diveSpeed? : number,legs? : number, flyingSpeed? :  number, birdName? : String){
        super(legs,flyingSpeed,birdName);
        this.diveSpeed = diveSpeed;
    }

    public getDiveSpeed() : number {
        return this.diveSpeed;
    }
}