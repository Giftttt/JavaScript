//html 없이 node.js로 실행합니다.
// new Date() => Date 클래스를 이용해서 새로운(new) 날짜 데이터를 만듭니다. 기본값은 현재 날짜와 시간
//new 뒤에 클래스 나오면 뒤의 클래스로 새로운 걸 하려한다고 보면 됨
//``과 ${} 기호 사용하는 형식을 '문자열 탬플릿'이라고 부름
const today = new Date()
console.log(`현재 날짜와 시간 : ${today}`)
// local : 현지(국가와 언어)
console.log(`현재 날짜와 시간 : ${today.toLocaleString()}`)
console.log(`현재 날짜와 시간 : ${today.toLocaleDateString()}`)
console.log(`현재 날짜와 시간 : ${today.toLocaleTimeString()}`)
// 표준시()
console.log(`현재 날짜와 시간(표준시) : ${today.toISOString()}`)
console.log(`현재 날짜와 시간(표준시) : ${today.toUTCString()}`)
console.log(today.toString()) // 모든 객체에 문자열로 바꿔주는 기본 메소드 toString()
console.log(today.toDateString())
console.log(today.toTimeString())

// 날짜는 기본적으로 정수값 형식입니다.
//          ㄴ 1970년 1월 1일 0시 기준으로 얼마나 지났는지 ms 단위로 저장.
console.log(`정수값 new Date() :  ${today.getTime()}`) //1750985915625
let todayLong = 56*365*24*60*60*1000 // 긴 값은 long 붙인다 생각
console.log(`정수값 new Date() 대략적인 값 :  ${todayLong}`) // 1766016000000

// 날짜 데이터 조작
console.log(`today에서 년도 추출 : ${today.getFullYear()}`)
console.log(`today에서 월 추출 : ${today.getMonth()}`) // 5 - 월은 0부터시작. 0~11값
console.log(`today에서 일 추출 : ${today.getDate()}`)
console.log(`today에서 요일 추출 : ${today.getDay()}`) // 5 - 일요일부터 시작. 0~6

// 특정 날짜
let date1 = new Date('2025-12-25')
let date2 = new Date('2025/12/25')
let date3 = new Date('2025.12.25')
console.log(`date1 : ${date1}`)
console.log(`date2 : ${date2}`)
console.log(`date3 : ${date3}`)

//특정 날짜와 시간까지 지정
date1 = new Date(2025,11,25,11,30,0)
console.log(`date1 날짜와 시간 : ${date1}`)
date2 = new Date('2025-06-27T18:30:00') // 현재시간 설정
console.log(`date2 날짜와 시간 : ${date2}`)
date3 = new Date('2025-06-27T18:30:00Z') // 표준시 설정
console.log(`date3 날짜와 시간 : ${date3}`)
// 현지시간의 현재 시간 - 운영체제 기준

//locale 정보 확인
// en-US ja-JP fr-FR
console.log(`참고 : locale 정보 ${navigator.language}`) // (언어-국가)
//지정된 로케일 정보로 출력 형식이 달라진다.
console.log(`참고 : 프랑스 시간 ${date3.toLocaleString('fr-FR')}`)

//날짜를 이용한 계산
date1 = new Date()
date2 = new Date('2025-12-25')

let diff = date2 - date1
console.log(`날짜의 뺄셈 : ${diff} ms`) // 단위 : ms => 15631853431

let oneday = 24*60*60*1000
diff /= oneday // diff = diff / oneday
// 소숫점 : 반올림, 내림, 올림 -> Math.round(), Math.floor(), Math.ceil()
console.log(`날짜의 뺄셈 : ${Math.ceil(diff)} 일`)

// 날짜 변경하기 : 년도, 월, 일 단위로 더하기 또는 빼기
// today = new Date()는 이미 선언된 상태

let someday = new Date()
// 예시) 오늘로부터 3년 후. 
someday.setFullYear(someday.getFullYear() + 3)
console.log(`3년 후 : ${someday.toString()}`)

// 예시) 오늘로부터 3달 후.
someday = new Date()
someday.setMonth(someday.getMonth() + 3)
console.log(`3달 후 : ${someday.toString()}`)

// 예시) 오늘로부터 181일 후.
someday = new Date()
someday.setDate(someday.getDate() + 181)
console.log(`181일 후 : ${someday.toString()}`)

// input type="date"  입력요소는 형식이 'yyyy-MM-dd' (자리수 중요)
// 값을 설정할 때에는 별도 코드 만들기
function dateInputFmt(vdate) {   // 임의의 날짜입력 vdate
  const year = vdate.getFullYear()
  const month = (vdate.getMonth() + 1).toString().padStart(2, '0')
  const datee = vdate.getDate().toString().padStart(2, '0')

  return [year, month, datee].join('-')
}
console.log('dateInputFmt(new Date()) :', dateInputFmt(new Date()))