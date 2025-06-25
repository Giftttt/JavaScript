const time = ['09:00', '10:00', '11:00', '12:00', '13:00']
const todo = ['기상', '운동', '독서', '점심', '공부']

const timeTr = document.querySelectorAll('tr#time td')
const todoTr = document.querySelectorAll('tr#todo td')
const title = document.getElementById('title')

for (let i = 0; i < time.length; i++) {
    timeTr[i].textContent = time[i]
    todoTr[i].textContent = todo[i]
}

const time2 = ['08:00', '10:30', '11:20', '12:50', '13:45']
const todo2 = ['기상', '미팅', '회의', '아점', '친구']

const tod = document.getElementById('today')
const timetd = document.getElementById('time')
const todotd = document.getElementById('todo')

// 데이터(배열)만 다르고 실행 내용은 같음 - > 함수로 리팩토링
function timeline(timeArr, todoArr, title) { // 입력 : 시간표 배열, 할일 배열, 제목
    // 형색 매개변수 (값은 실행할 때 전달되어 저장)

    timeTr.innerHTML = '<th>TIME</th>' // textcontent 안 쓰는 이유는 요소가 들어가기 때문
    todoTr.innerHTML = '<th>TODO</th>'
    title.textContent = title + '시간표'
    for (let t of timeArr) {
        const td = document.createElement('td')
        td.textContent = t
        timeTr.appendChild(td)
    }
    // t는 중괄호 안에서 끝나는 변수. 두 개의 t는 다른 메모리를 사용함

    for (let t of todoArr) {
        const td = document.createElement('td')
        td.textContent = t
        todotd.appendChild(td)
    }
}

const tom = document.getElementById('tomorrow')
const timeBody = document.getElementById('time')
const todoBody = document.getElementById('todo')

tod.addEventListener('click', function () {
    timeline(time, todo, '오늘') // 위에서 선언한 배열 이름 time, todo 함수로 전달
})


tom.addEventListener('click', function () {
    // textcontent 안 쓰는 이유는 요소가 들어가기 때문
    timeBody.innerHTML = '<th>TIME</th>'
    todoBody.innerHTML = '<th>TODO</th>'
    // title.textContent = '내일 시간표'
    for (let t of time2) {
        const td = document.createElement('td')
        td.textContent = t
        timeBody.appendChild(td)
    }
    // t는 중괄호 안에서 끝나는 변수. 두 개의 t는 다른 메모리를 사용함

    for (let t of todo2) {
        const td = document.createElement('td')
        td.textContent = t
        todoBody.appendChild(td)
    }
})