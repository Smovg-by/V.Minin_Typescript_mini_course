// for file compilation call the following string in Terminal: tsc 01_Dara_Types.ts
// You can not reassign another data type!!!
// String

const str: string = "Hello";

// Boolean

const isFetching: boolean = true;
const isLoading: boolean = false;

// number

let int: number = 42;
let float: number = 23.5;
let number: number = 3e10;

// Arrays of number

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

// Arrsay of strings

const stringArray: string[] = ["a", "b", "c"];
const stringArray2: Array<string> = ["a", "b", "c"];

// Tuple (кортеж)

const contact: [string, number] = ["valdilen", 1234567];
// if you need to reassignd data type use ANY data type
let variable: any = 42;
variable = [1.2, "James"];

// ===FUNCTIONS

function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("HeizenBerg");

// NEVER data type

function throwError(meassage: string) {
  for (let i = 0; i < 10; i++) {
    throw new Error();
  }
}

function infinite(): never {
  while (true) {}
}

// Make your own TYPE (creating alias)
type Login = string;
const login: Login = "admin"

// or you can define several data types usung TYPE
type ID = string | number;
const id1: ID = 1234;
const id2: ID = "John"

// NULL (use VOID fo functions if it returns noting!!!)
type Sometype = string | null | undefined