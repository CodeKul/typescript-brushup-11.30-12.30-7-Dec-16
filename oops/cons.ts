export class Pin {

    private ports : Number;
    private company : String;

    public constructor(ports? : Number , company? : String){
        this.ports = ports;
        this.company = company;
        
        console.log('Ports - '+ports +' Company - '+company);
    }
}