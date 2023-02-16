// 데코레이터 그냥 함수다.
// 확장 함수
function Logger(constructor: Function){
  console.log('Loading....');
  console.log(constructor)
}

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const persone = new Person();
