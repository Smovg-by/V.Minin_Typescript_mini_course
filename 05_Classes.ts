// below we see class we made as in JS, but define the data types
class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// below

class Car {
  readonly model: string; // 'model' property is read only, but we can assign it ONLY in constructor/
  readonly numberOfWheels: number = 4; // default number is 4

  constructor(theModel: string) {
    this.model = theModel; // 'model' property is read only, but we can assign it ONLY in constructor/
  }
}

// Below you see the same class as above, but sript is shorter

class Car2 {
  readonly numberOfWheels: number = 4; // default number is 4

  constructor(readonly mode: string) {}
}

//=== CLASS modificators (PROTECTED, PUBLIC and PRIVATE ). Public is set as default!

class Animal {
  protected voice: string = ""; // PROTECTED means accessible for class Animal and all others extended from it
  public color: string = "black"; // Aceesible for all instances

  private go() {
    // PRIVATE properties are accesible ONLY in the classes that have been defined.
    // So you can get access n Animal class, but in Cat no.
    console.log("Go");
  }
}

// Let`s make a new class extends class Animal

class Cat extends Animal {
  public setVoice(voice: string): void {
    // 'void' means that function returns nothing
    this.voice = voice;
  }
}

const cat = new Cat(); // we can`t get access to the cat.voice propery because it is PROTECTED

//=== ABSTRACT CLASSES and METHODS.
// You can extend from them but they will not be compiled.

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
