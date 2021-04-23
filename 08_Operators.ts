// Helpfull operators

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // only allowed 'name' or 'age'

const key: PersonKeys = "name"; // allowed
const key2: PersonKeys = "age"; // allowed

// const key3: PersonKeys = 'job' // not allowed, because we determine in interface only 'name' and 'age'

//===

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

// if wee need to create a new TYPE, but some propertie should be excluded as below

// First variant

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // now only 'name' or 'email' allowed

// Second variant

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

// Now it allowed to assign new variables that contains only 'name' and 'email'

let u1: UserKeysNoMeta1 = 'name' // allowed
// let u2: UserKeysNoMeta1 = '_id' // not allowed

let u3: UserKeysNoMeta2 = {name: 'Alex', email: 'mail@ru'} // allowed
// let u4: UserKeysNoMeta1 = '_id' // not allowed