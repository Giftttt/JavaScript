// 객체의 배열 = 배열의 요소는 객체
const members = [
    
{
    name: "김사나",
        age: 22,
            address: "경기",
                height: 160.9
},

{
    name: "박모모",
        age: 24,
            address: "서울",
                height: 187.9
},

{
    name: "이다현",
        age: 32,
            address: "제주",
                height: 123.9
}

]

console.log('배열 0번 요소 : ', members[0])
console.log('배열 0번 요소 객체 name : ', members[0].name)

console.log('배열 1번 요소 : ', members[1])
console.log('배열 2번 요소 : ', members[2])
console.log('배열 3번 요소 : ', members[3]) // undefined

// 1. members 배열에 저장된 객체의 모든 name 속성값 출력

// 2. 객체의 address 속성값이 '서울'인 name 속성값 출력
for(let m of members) { // 배열에서 가져올 땐 of
    // console.log(m)
    if (m.address === "서울")
    console.log(m.name)
}

// 3. 객체 배열에서 age 값이 25 이상인 name 속성값 출력
for(let m of members) { // 배열에서 가져올 땐 of
    if (m.age >= 25)
    console.log('25세 이상 : ', m.name)
}

// 4. 모든 배열 요소의 모든 속성값 출력
for(let m of members) {
    console.log(m.name)
    console.log(m.age)
    console.log(m.address)
    console.log(m.height)
}

for(let m of members) {
    console.log('~~')
    for (let key in m) { // 객체 m의 모든 속성을 순서대로 가져와서 key에 저장
        console.log(m[key])

    }
}

// 5. forEach method - array의 요소를 '하나씩 가져다가' 특정한 함수를 실행.
//                  ㄴ 메소드의 인자(입력)가 함수인 경우가 많음
members.forEach(
    function(item){     // '하나씩 가져온' 요소를 item 변수에 지정
    console.log(item.address)
})

// 위의 코드를 화살표 함수로 변경 가능함.
members.forEach(
    (item) => {     // '하나씩 가져온' 요소를 item 변수에 지정
    console.log(item.address)
})

// method의 입력(인자)인 함수를 먼저 정의하고 함수 이름 사용하기

function print(item){     // '하나씩 가져온' 요소를 item 변수에 지정
    console.log(item.address)
}

members.forEach(item => print(item)) // 많이 쓰이는 형식