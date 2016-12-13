import { Bike } from './interfaces/bike';
import { Animal } from './interfaces/animal';
import { Pump } from './abstractclasses/pump';
import { Mobile } from './abstractclasses/mobile';
import { Device } from './abstractclasses/device';
import { Eagle } from './inheritance/Eagle';
import { Bird } from './inheritance/Bird';
import { Pin } from './oops/cons';
import { Car } from './oops/car';
export class Starter {

    public whatIsLet(): void {
        let i = 10;
        if (true) {
            let i = 100;
        }
        console.log('Value of I is - ' + i);
    }

    public oops(): void {
        let car: Car = new Car();
        car.setCarName('Audi');
        let carName: String = car.getCarName()
        console.log('Car Name is - '+carName);
    }

    public constructorDemo()  : void{
        let pin : Pin = new Pin(); 
        let pinOut : Pin = new Pin(5,'Logitech');
    }
    public inheritance(): void {

        let bird: Bird = new Bird(2,5,'Android');
        console.log('Bird Flying Speed - '+bird.getFlyingSpeed());
        console.log('Bird Name - '+bird.getNameBird());
        console.log('Bird Legs - '+bird.getLegs());

        let eagle : Eagle = new Eagle(15,2,50,'Chetak');
        console.log('Eagle Dive Speed - '+eagle.getDiveSpeed());
        console.log('Eagle Flying Speed - '+eagle.getFlyingSpeed());
        console.log('Egale Name - '+eagle.getNameBird());
        console.log('Eagle Legs - '+eagle.getLegs());
    }

    public abstractClasses() : void {
       let mobile = new Mobile();
       mobile.powerUp();

       let pump = new Pump();
       pump.powerUp();
    }

    public interfaces() : void {

        let animal = new Animal();
        animal.walk();
        animal.eat();
        animal.getLocation();

        let bike = new Bike();
        bike.speedUp();
        bike.blowHorn();
        bike.getLocation();
    }
}