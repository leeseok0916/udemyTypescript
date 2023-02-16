// 데코레이터 그냥 함수다.
// 확장 함수
// function Logger(constructor: Function){
//   console.log('Loading....');
//   console.log(constructor)
// }

// 데코레이터 팩토리
// function Logger(logString: string){
//   // 데코레이터 함수
//   // 데코레이터 함수가 사용하는 값을 커스터마이즈 할 수 있다???
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor)  
//   }
// }

// function WithTemplate(template:string, hookId: string) {
//   return function(_: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template;
//     }
//   }
// }

// // 데코레이터 함수 실행은 아래 데코레이터부터 실행함
// // WithTemplate => Logger
// // 단, 데코레이터 팩토리는 위에서 아래로 실행됨
// // Logger => WithTemplate
// @Logger('LOGGING - PERSON')
// @WithTemplate('<h1> My Person Object<h1>', 'app')
// class Person {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const persone = new Person();

// 속성에 사용할 데코레이토 함수
// 속성에 사용하는 데코레이토의 첫 번째 인수는 프로퍼티의 타겟, 두 번째 인수는 속성 이름
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// 접근자 데코레이토 함수
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// 메서드 데코레이토 
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// 파라미터 데코레이토
function Log4(target: any, name: string, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Invalid price');
    }
  }

  constructor(t: string, price: number) {
    this.title = t;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * tax;
  }  
}

const p = new Product('product', 1000);