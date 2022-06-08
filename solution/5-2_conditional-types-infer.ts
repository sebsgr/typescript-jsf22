export { };

type Flatten<T> = T extends Array<infer I> ? I : T;

declare var t1: Flatten<number[]>;  // number
declare var t2: Flatten<number>;  // number


function foo() {
    return "Hello World";
}

type ReturnType<T extends () => any> = T extends () => infer R ? R : never;

declare var bar: ReturnType<typeof foo>    // string