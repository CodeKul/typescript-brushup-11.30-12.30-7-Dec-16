import { GpsProvider } from './gpsprovider';
export class Animal implements GpsProvider{
    public walk() : void {
         console.log(`Animal is walking`);
    }
    public eat() : void {
        console.log(`Animal is eating`);
    } 
    public getLocation() : void {
        console.log(`Animal is in zoo`);
    }
}