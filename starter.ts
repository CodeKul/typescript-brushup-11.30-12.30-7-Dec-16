import { Car } from './ts-first/oops/car';
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
    public inheritance(): void {

    }
}