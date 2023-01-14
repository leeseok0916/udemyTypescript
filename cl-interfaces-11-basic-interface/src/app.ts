// interface Named {
//   name: string;
// }

// interface Greetable {
//   age: number;

//   greet(phrase: string): void
// }

// class Person implements Named, Greetable {
//   age: number = 30;
//   constructor(public name: string) {
//     this.name = name;
//   }

//   greet(phrase: string): void {
//     console.log(phrase);
//   }
// }

interface Named {
  name: string;
  output?: string
}

interface Greetable extends Named {
  age: number;

  greet(phrase: string): void
}

class Person implements Greetable {
  age: number = 30;
  constructor(public name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase);
  }
}