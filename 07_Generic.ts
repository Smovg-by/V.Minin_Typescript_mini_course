// Generic syntax

// for exampe you want to handle two arrays, but the data types are different.
// They could be numbers array, strings array, tuples array and others.
// in this case you can use generic syntax

const arraysOfNumber: Array<number> = [1,2,3,4]
const arraysOfStrings: Array<string> = ['Hello', 'Vladilen']

// now we use abstract generic type that adopts to any datatype that function handles

function reverse<AnyArrType>(array: AnyArrType[]): AnyArrType[]{
  return array.reverse();
}

// as a result we can call a function with differet data types:

reverse(arraysOfNumber); // allowed
reverse(arraysOfStrings); // allowed