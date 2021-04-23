//=== function should return number data type
function add(a: number, b: number) {
  a + b;
}

//=== function should return string data type
function toUppercase(str: string): string {
  // the second 'string' means that function ought to return string data
  return str.trim().toUpperCase();
}

//=== here we can call a function using different parameters and receive different values
// Lets make interfaces
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

// below we determined three varians of calling the function
function position(): MyPosition;

function position(a: number): MyPositionWithDefault;

function position(a: number, b: number): MyPosition;

// below we do the function we intend to call

function position(a?: number, b?: number) {
  // '?' means that the argument is not necessary (as we determined above)
  if (!a && !b) {
    // this is the interface MyPosition case
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }
  return { x: a, y: b };
}

// let`s call the function:

console.log("Emplty:   ", position());
console.log("One param:   ", position(42)); // a = 42
console.log("Two params:   ", position(42, 15)); // a = 42, b = 15
