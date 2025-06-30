// const time = ['09:00', '10:00', '11:00', '12:00', '13:00']
// const todo = ['기상', '운동', '독서', '점심', '공부']

/*
    위의 2개의 배열을 객체 배열 1개로 변경
    객체 예시 : {time: '09:00', todo: '과제'}
*/
// 비어있는 배열에 새로운 요소를 추가 : push() method 활용
const schedule =[]
for (let i=0; i<time.length; i++) {
    let newItem = { time: time[i], todo: todo[i]}
    schedule.push(newItem)

}

// const schedule = [
//     {time:'09:00',
//         todo: '기상'},

//     {time:'10:00',
//         todo: '운동'},

//     {time:'11:00',
//         todo: '독서'},

//     {time:'12:00',
//         todo: '점심'},

//     {time:'13:00',
//         todo: '공부'}
//     ]
 
function printColumm(item){     // '하나씩 가져온' 요소를 item 변수에 지정 - > tr 요소를 만들기
    const tr = document.createElement('tr')
    for(let key in item){   // 객체의 모든 속성을 순회
        const td = document.createElement('td')
        td.textContent = item[key]
        tr.appendChild(td)
    }
    console.log(tr)
    return tr // 괄호 안은 입력, return 다음은 출력. return은 for문 밖에서 써야함
}
const newBtn = document.getElementById('newBtn')
newBtn.addEventListener('click')
document.addEventListener('DOMContentLoaded', function (){
    
})

const root = document.getElementById('root')
const table = document.createElement('table')
table.innerHTML = `<tr>
                   <th>시간</th>
                   <th>할 일</th>
                    </tr>`
root.appendChild(table)
schedule.forEach(item => {
    
    const trResult = printColumm(item)
    table.appendChild(trResult)

})