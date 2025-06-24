const members = ['mina', 'momo', 'nayeon', 'dahyeon', 'jihyo',]
        members.push('sana')
        const twice2 = document.getElementById('twice2')
        for(let m of members) {
            const li = document.createElement('li') // li 요소 만들기
            li.textContent = m
            // class 속성값 추가(새로운 스타일 적용)
            li.classList.add('blue')
            li.classList.add('w500')
            console.log(li)
            twice2.appendChild(li) // 부모요소 twice2에 생성된 li 요소를 마지막 자식으로 추가하기
        }
        // console.log(li) 
        //for 안에서 선언된 li는 for() { --- } 밖에서는 사용 못함