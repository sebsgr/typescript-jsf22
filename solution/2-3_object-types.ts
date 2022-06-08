export { };

// type inference
var point = { x: 0, y: 1 };

function foo(point: { x: number, y: number }) { }

// type inference
function bar() {
    return { x: 5, y: 10 };
}

