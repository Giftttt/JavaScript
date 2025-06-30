//배열 매소드 연습2
// 1. splice - 기존 배열에 새로운 요소를 추가/삭제
let fruits = ['banana', 'mango', 'orange', 'apple']

fruits.splice(2, 0, 'lemon')
// 2 : 새로운 데이터 'lemon'이 추가될 위치(인덱스)
// 0 : 삭제할 데이터 개수
// 그 뒤의 값들 : 추가될 데이터

console.log(fruits.toString()) 

fruits = ['banana', 'mango', 'orange', 'apple']
fruits.splice(1,1)              // 리턴이 없다
// 1 : 추가될 위치 인덱스
// 1 : 삭제할 데이터 개수
// 추가할 값 없음
console.log(fruits.toString()) // fruits 자체가 바뀜


// 2.slice() : 배열의 특정 부분을 자르기하여 새로운 배열을 생성
let myfruits = fruits.slice(1,3)
// 1 : 시작 위치 인덱스
// 3 : 마지막 위치 인덱스(포함x) -> 1~2까지 자름
// 자르기한 배열의 개수 = 3-1 = 2
console.log(fruits.toString()) // fruits 변화 없음
console.log(myfruits.toString()) // 새로운게 생성

fruits = ['banana', 'mango', 'orange', 'apple']
// 슬라이스의 입력값이 1개인 경우 - 마지막 인덱스 생략(끝까지)
myfruits = fruits.slice(1)
console.log('1개', myfruits.toString())

// 3. indexOf()
fruits = ['Apple', 'Orange', 'Apple', 'Mango']
let position = fruits.indexOf("Apple")
console.log('Apple의 첫 번째 위치:', position)
// 4. lastIndexOf()
position = fruits.lastIndexOf("Apple")
console.log('Apple 의 마지막 위치:', position)
position = fruits.indexOf("Lemon")  // 없는 값 = -1 중요
console.log('Lemon 의 첫번쨰 위치:', position)
// 5. includes() - 값의 존재 유무를 boolean으로 알려줌
let result = fruits.includes("Mango");
console.log("Mango 있음?", result)
result = fruits.includes("Lemon");
console.log("Lemon 있음?", result)

// 6. find() : 인자가 콜백함수 - 참 또는 거짓을 리턴
//              forEach 와 같이 배열 요소를 하나씩 가져와서 함수에 전달
//                                  ㄴ 값, 인덱스, 원본배열
const numbers = [4,9,16,25,29];
let first = numbers.find(myFunction);           // 넘버스 값이 find 함수의 myFunction에 들어가고myFunction 값의 value에 가서 return 뒤의 value 값에 대입해서 true면 first 값에 출력됨
function myFunction(value, index, array) { // 값, 인덱스, 원본 배열
    return value > 18;
}
// 7. findIndex()
first = numbers.findIndex(myFunction)
console.log(first)

// 8. findLast()
let last = numbers.findLast(myFunction)

// 9. findLastIndex()
last = numbers.findLastIndex(myFunction)
console.log(last)

// 화살표 함수로 변형 (가장 많이 쓰이는 형식)
first = numbers.find(value => value > 18) // 53번째 줄 함수랑 똑같음
console.log('18보다 큰 첫번째 값:', first)
first = numbers.find(value => value > 25 && value < 30) 
console.log('25보다 크고 30보다 작은 첫번째 값:', first)
