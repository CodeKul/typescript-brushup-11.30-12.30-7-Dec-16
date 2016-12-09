export class Car {
    private carName: String; //state

    public getCarName(): String { //behaviour
        return this.carName;
    }
    public setCarName(carName: String){
        this.carName = carName;
    }
} 