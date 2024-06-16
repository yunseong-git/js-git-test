//화살표 함수는 생성자 함수로 사용불가하며, argument를 지원하지 않는다.

const a = (b = 2) => {
  return b;
};
//이렇게 함수에 기본 매개변수를 바로 설정할 수 있다.

console.log(a());

function arrow() {
  setTimeout(() => {
    console.log(this);
  }, 1000);
}
const case1 = new arrow(); //arrow 함수를 출력

function not_arrow() {
  setTimeout(function () {
    console.log(this);
  }, 1000);
}
const case2 = new not_arrow(); //timeout함수를 출력

/*
case1와 case2에서 this가 가리키는 것이 다르다!
화살표 함수는 자신만의 this 바인딩을 가지지 않고, 상위 스코프의 this를 참조하기 때문에
화살표 함수로 setTimeout 등을 선언하면 this가 함수호출 패턴에 의해 결정되는것을 막을수 있다.

(내생각)
화살표 함수를 사용하면 확실히 여러 오류들도 막고, 기본 매개변수도 사용할 수 있고, 깔끔하게 함수를 사용할 수 있다고는 하는데
아직 익숙하지 않아서인지 엄청 좋아보이지는 않는다. 엄청 간단한 함수가 아니라면 그냥 es5 함수선언을 사용해도 될 거 같은데...
일단 이런 사용법도 있다는 것만 알아두자
*/

/*
forEach: 반환값이 없이 배열의 각 요소에 대해 한 번씩 함수를 실행
map: 각 요소에 대해 함수를 실행하고 결과를 모아 새로운 배열을 반환
filter: 각 요소에 대해 함수를 실행하고 true를 반환하는 요소들로 새로운 배열을 반환
reduce: 각 요소에 대해 함수를 실행하고 단일 결과값을 반환
every: 모든 요소가 함수의 조건을 만족하면 true, 아니면 false를 반환
some: 일부 요소가 함수의 조건을 만족하면 true, 아니면 false를 반환

<참고: 배열 메서드의 성능>
forEach는 단순히 반복하며, 반환값이 없으므로, 배열을 순회하는 데 있어서 단순함
map과 filter는 새로운 배열을 반환해야 하므로, 메모리 사용량이 증가할 수 있음
reduce는 단일 값을 반환하는 데 사용되며, 초기값을 설정할 수 있어 다양한 용도로 활용할 수 있음
every와 some은 조건을 만족하는지 확인하는 데 사용되며, 조건을 만족하는 순간 순회를 멈추므로, 성능면에서 유리할 수 있음
*/

const numbers = [1, 2, 3, 4, 5];

// forEach: 각 요소를 출력
numbers.forEach((num) => console.log(num)); // 1 2 3 4 5

// map: 각 요소에 2를 곱한 새로운 배열을 반환
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: 짝수인 요소만으로 새로운 배열을 반환
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: 모든 요소를 더하여 합계를 반환
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// every: 모든 요소가 5보다 작은지 확인
const allLessThanFive = numbers.every((num) => num < 5);
console.log(allLessThanFive); // false

// some: 일부 요소가 3보다 큰지 확인
const someGreaterThanThree = numbers.some((num) => num > 3);
console.log(someGreaterThanThree); // true

/*
find: 함수의 조건을 만족하는 첫 번째 요소를 반환
findIndex: 함수의 조건을 만족하는 첫 번째 요소의 인덱스를 반환
indexOF: 배열에 특정 값이 포함되어 있는지 확인하고, 그 값의 첫 번째 인덱스를 반환, 없으면 -1을 반환
includes: 배열에 특정 값이 포함되어 있는지 확인하여 true 또는 false를 반환

< 참고1 : indexOF vs findIndex >
indexOf는 단순한 값 비교로 이루어지므로, 값이 정수, 문자열 등 기본 타입일 때 더 빠름.
따라서 단순한 값으로 요소를 찾고 싶을 때 유용.
findIndex는 판별 함수를 실행해야 하므로, 조건이 복잡하거나 함수 실행 시간이 오래 걸리는 경우 성능이 떨어질 수 있음.
따라서 조건이나 판별 함수를 기반으로 요소를 찾고 싶을 때 유용
*/

const people = [
  { name: "김하나", age: 25 },
  { name: "김둘", age: 30 },
  { name: "김셋", age: 35 },
];

// find: 나이가 30인 첫 번째 사람을 찾음
const person = people.find((person) => person.age === 30);
console.log(person); // { name: '김둘', age: 30 }

// findIndex: 나이가 30인 첫 번째 사람의 인덱스를 찾음
const personIndex = people.findIndex((person) => person.age === 30);
console.log(personIndex); // 1

// includes: 배열에 특정 값이 포함되어 있는지 확인
const names = ["김하나", "김둘", "김셋"];
const has김하나 = names.includes("김하나");
console.log(has김하나); // true

const has김다섯 = names.includes("김다섯");
console.log(has김다섯); // false

// indexOf: 배열에 특정 값이 포함되어 있는지 확인하고, 그 인덱스를 반환
const indexOf김하나 = names.indexOf("김하나");
console.log(indexOf김하나); // 0 (김하나의 인덱스)

const indexOf김다섯 = names.indexOf("김다섯");
console.log(indexOf김다섯); // -1 (김다섯은 배열에 없음)

//**전체 코드를 돌려보니 역시 settime함수가 포함된 부분이 event loop에 의해 나중에 실행된다 (자바스크립트 동작원리)
