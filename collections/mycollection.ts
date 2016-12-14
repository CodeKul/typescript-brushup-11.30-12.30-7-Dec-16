export class MyCollection {

    public whatIsArray() : void{
        let arrStr : Array<String> = new Array<String>(); 
        arrStr[0] = 'Android';
        arrStr[1] = 'Java';
        arrStr[2] = 'TypeScript';
        arrStr[3] = 'JavaScript';
        arrStr[4] = 'NodeJs';

        arrStr.forEach( s => console.log(`Lambda - ${s}`));
        arrStr.forEach( function(s){
            console.log(`Traditional ${s}`);
        });
        //arrStr.forEach(console.log);
    }
}