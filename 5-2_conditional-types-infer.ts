export { };

type Flatten<T> = ...

declare var t1: Flatten<number[]>;  // number
declare var t2: Flatten<number>;  // number


function foo(){
    return "Hello World";
}

type ReturnType<T> = ...