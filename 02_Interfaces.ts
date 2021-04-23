// for file compilation call the following string in Terminal: tsc 02_Interfaces.ts
//===One of TypeScript’s core principles is that type checking focuses on the 'shape'
// that values have. This is sometimes called “duck typing” or “structural subtyping”.
// In TypeScript, interfaces fill the role of naming these types, and are a powerful
// way of defining contracts within your code as well as contracts with code outside
// of your project.
interface Rect {
  // "readonly" means you acn not assign another value to the property.
  readonly id: string;
  // "?" means not necessary property
  color?: string;
  size: {
    width: number;
    height: number;
  };
}
// rect1 IS VALID when you create it in accordance to the interface Rect
const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    height: 20,
  },
};

rect2.color = "black";
// despite the CONST variable type is, you can add a property.
// BUT you can not reassign the variable, i.e. rect2 = {another object}

const rect3 = {} as Rect; // you can initialize an emply object, but if you want
//to assign certain data type to it you can use 'as' word, or the elder variant:
const rect = <Rect>{};

//===INTERFACE INTERACTION

// inherinting by using the "extends" word
interface RectWithArea extends Rect {
  getArea: () => number; // use Rect interface and add a function  (that means)
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },
  getArea(): number {
    // add a method to the object
    return this.size.width * this.size.height;
  },
};
// === Classes
interface Iclock {
  time: Date;
  setTime(date: Date): void;
}

class Click implements Iclock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}
//===
interface Styles {
  [key:string]: string; // use this string to add different types of keys in certain way
}

const css: Styles = {
  border: "1ps solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
