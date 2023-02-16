interface ValidatorConfig {
  [propName: string]: {
    [validatableProp: string]: string[] // ['required','positive']
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
  }
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]:[...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
  }
}
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  // {
  //   title: ['required'],
  //   price: ['positive']
  // }
  if (!objValidatorConfig) {
    return true;
  }

  let isValid =true;
  for (const prop in objValidatorConfig) {
    for(const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid =  isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;

  // input 으로 들어온 title과 price 의 값이 빈 값이거나 0 일 수 있다
  // 그래서 조건문으로 해당 케이스를 체크하는 유효성 검사 로직을 넣어야 하는데
  // 이걸 데코레이토로 할 수 있다
  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again.');
    return;
  }

  console.log(createdCourse);
})