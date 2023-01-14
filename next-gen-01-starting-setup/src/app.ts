/**
 * let 과 var의 차이 scope가 다르다
 * 
 */


const add = (...numbers: number[]): number => {
  return numbers.reduce((a, b) => a + b)
}

const addedNumbers = add(1, 2, 3, 4, 5, 6, 6);
console.log(addedNumbers);


const hobbies: string[] = ['놀기', '당구', '유튜브 보기', '잠자기', '육아']
const [h1, h2, ...h3] = hobbies;

console.log(h1);
console.log(h3);

const {
  store,
  deliveryPriceSetupDeliveryAgencyStores,
  deliveryPriceSpecialExtraCharge,
  ..._deliveryAgencyStore
} = row;
