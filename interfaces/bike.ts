import { GpsProvider } from './gpsprovider';
export class Bike implements GpsProvider{

    public speedUp() : void {
        console.log(`speeding up`);
    } 
    public blowHorn() : void {
        console.log(`peep peep`);
    }
    
    public getLocation() : void {
        console.log(`Bike is on Road`);
    }
}