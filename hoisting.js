function case1_var() {
  var i = 3;
  for (var i = 0; i < 10; i++) {}
  return i;
}
console.log(case1_var()); //10

function case2_var() {
  for (var i = 0; i < 10; i++) {}
  return i;
}
console.log(case2_var()); //10

/*
function case1_let() {
  for (let i = 0; i < 10; i++) {}
  return i;
}
console.log(case1_let()); //ref error: not defined
*/

/*
<결론>
scope : (var -> 함수 스코프) (let, const -> 블록 스코프)
hoisting : 모든 변수와 함수 선언은 스코프의 최상단으로 이동함

var의 선언방법: 선언 및 초기화 -> 할당
let, const의 선언방법: 선언 -> TDZ -> 초기화 -> 할당

선언: 실행 컨텍스트(execution context)에 등록됨
초기화: undefined로 초기화 하는 것
TDZ: 선언은 되었지만 초기화되지 않은 상태의 변수가 머무는 영역

둘 다 호이스팅이 발생하지만, var는 초기화가 되어있는 상태여서 case2_var처럼 에러가 발생하지 않고,
let과 const는 초기화되지 않은 상태로 TDZ에 존재하기에 에러가 발생

결과적으로 var보다는 let이 조금 더 안전함. ReferenceError가 사전에 발생하는 것이 오히려 유리함 (내 생각)

함수 선언: 선언, 초기화, 할당이 동시에 진행됨
*/
