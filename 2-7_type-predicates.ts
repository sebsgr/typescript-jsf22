export { };

type Square = { a: number };
type Circle = { radius: number };
type Shape = Square | Circle;

function isSquare(shape: Shape) {
    return false;
}

declare const shape: Shape;

if (isSquare(shape)) {
    shape.a;
} else {
    shape.radius;
}
