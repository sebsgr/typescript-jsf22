export { };

declare const foo: number | string;

if (typeof foo === "number") {
    foo.toExponential();
} else {
    foo.length;
}

foo.toLocaleString();

declare const bar: number | string | boolean;

if (typeof bar === "number") {
    bar.toExponential();
} else if (typeof bar === "string") {
    bar.length;
}
else {
    const b: boolean = bar;
}
