// function merge(objA: object, objB: object): object {
//   return { ...objA, ...objB };
// }

function merge<T extends object, R extends object>(objA: T, objB: R) {
  return { ...objA, ...objB };
}

console.log(merge({ name: 'twostones' }, { age: 21 }));

const mergeObj = merge({ name: 'twostones' }, { age: 21 });
mergeObj.name = 'twostones'; // 제네릭으로 컴파일 에러가 나지 않는다


const mergeObj2 = merge(1, 2);
console.log(mergeObj2);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '값이 없음';
  
  if (element.length === 1) {
    descriptionText = '값이 1개 있음';
  } else if (element.length > 1) {
    descriptionText = `값이 ${element.length} 개 있음`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('도레미파솔라시도'));
console.log(countAndDescribe([1,2,3]));
console.log(countAndDescribe([]));
console.log(countAndDescribe(1)); // 컴파일 에러 남


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`
}

extractAndConvert({ name: 'name111' }, 'name');
extractAndConvert({ name: 'name111' }, 'name2'); // name2 속성이 없어서 컴파일 에러남, 두 번째 인자는 첫 번째 인자인 객체의 key를 넘겨야 하는것이라서 그러함


function getValue<T, K extends keyof T>(obj: T, key: K) : T[K] {
  return obj[key];
}

