export class Anything<T> {
    private anything : T;

    public whatsCurrentType() : T {
        return this.anything;
    }

    public assignType(anything : T) : void {
        this.anything = anything;
    }
}