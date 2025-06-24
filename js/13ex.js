//함수의 기본 형식
//          data 입력 -> function(실행) - > 실행 결과 출력
//          (인자, 인수)                (리턴)
// let ele = members.pop() : 입력값 없고, 출력은 ele 변수에 저장
// let size = members.push('사나') 입력값 '사나', 출력은 size 변수에 저장

// 함수 유형 1 : 인자 x 리턴 x
function add() {
    console.log(100 + 1000)
}

add()
add()
add()
// 함수 유형 2 : 인자 x 리턴 o
function sub() {
    return 100 + 1000; // 함수의 실행 결과를 ㅓㄴ달하기
}

let result = sub() // 함수를 호출하면 결과값을 전달 받습니다.
console.log('뺄셈', result)
console.log('뺄셈', sub())
// 함수 유형 3 : 인자 o 리턴 x
function multiply(num1,num2)
// 함수 유형 4 : 인자 o 리턴 o

result = div(77, 13)
console.log('나누기:', result)
console.log('나누기:', div(77, 13))
console.log('나눈 결과 소수점:', result.toFixed(3))