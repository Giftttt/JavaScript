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

function printRow(item){     // '하나씩 가져온' 요소를 item 변수에 지정 - > tr 요소를 만들기
    const tr = document.createElement('tr')
    for(let key in item){   // 객체의 모든 속성을 순회
        const td = document.createElement('td')
        td.textContent = item[key]
        tr.appendChild(td)
    }
    console.log(tr)
    return tr // 괄호 안은 입력, return 다음은 출력. return은 for문 밖에서 써야함
}

// document.addEventListener('DOMContentLoaded', function (){

// })


const root = document.getElementById('root')
const table = document.createElement('table')
table.innerHTML = `<tr>
                   <th>이름</th>
                   <th>나이</th>
                   <th>거주지</th>
                   <th>키</th>
                    </tr>`
root.appendChild(table)
members.forEach(item => {
    
    const trResult = printRow(item)
    table.appendChild(trResult)

})