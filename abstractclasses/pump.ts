import { Device } from './device';
export class Pump extends Device{

    public powerUp() : void {
        super.power = 1;
        console.log(`Pump power is ${super.power}`);
    }
}