// 4개 연산을 테스트. console에 결과값 출력. 값은 789, 125

function calc(num1, num2, op) { // 형식매개변수(인자)
    let result = 0      // 결과값 변수 (지역변수 - {} 안에서 선언된)
    
    switch (op) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
    
        default:
            console.error('op는 허용되지 않는 값 입력입니다.')
            break;
    }
    return result;
}

// let resultAdd
// resultAdd = calc(789,125,'+')
// let resultMinus
// resultMinus = calc(789,125,'-')
// let resultMultiply
// resultMultiply = calc(789,125,'*')
// let resultDiv
// resultDiv = calc(789,125,'/')
// console.log(resultAdd)
// console.log(resultMinus)
// console.log(resultMultiply)
// console.log(resultDiv)

let result // 전역 변수 : 파일 전체에서 사용. 이름이 같은 지역변수 result 와 다른 메모리 공간 
result = calc(789,125,'+')

console.log('+ :', result)
console.log('- :', calc(789,125,'-'))
console.log('* :', calc(789,125,'*'))
console.log('/ :', calc(789,125,'/'))

const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click', function(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let op = document.getElementById('op').value
    console.log(typeof(num1, num2, op)) // 정상 작동이 안 될 경우 typeof로 변수 타입 확인
    // 덧셈 제외한 나머지 연산은 연산을 위해 자동으로 타입이 숫자로 변경됨
    let result = calc(Number(num1), Number(num2), op) //function calc(num1, num2, op)의 변수와 메모리 공간 다름. 실매개변수(인자)


    
    // span#result 요소에 결과값을 출력
    document.querySelector('span#result').textContent = result
})
