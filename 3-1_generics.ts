export { };

function log<T>(arg: T): T {
    console.log(arg);
    return arg;
}

type Colorful = { color: string }

function logColor<T extends Colorful>(colorful: T) {
    console.log(colorful.color);
}

class ReadOnlyArray<T> {
    constructor(private innerArray: T[]) { }

    public getAtIndex(index: number): T {
        return this.innerArray[index];
    }
}
