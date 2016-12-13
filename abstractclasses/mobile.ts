import { Device } from './device';
export class Mobile extends Device{

    public powerUp() : void {
        super.power =  1;
        console.log(`Mobile power is ${super.power}`);
    }
}