function list(title, period, place, )
{
    this.title=title;
    this.period=period;
    this.place=place;
}

//리스트 항목
let somewhere = new list("전시", "23.07.30", "서울");
let anywhere = new list("팝업", "23.08.15", "강남");

// HTML에 목록 추가하는 함수
function addListItem(category) {
    document.querySelector('#title').innerHTML=category.title;
    document.querySelector('#period').innerHTML=category.period;
    document.querySelector('#place').innerHTML=category.place;
}

// 특정 카테고리의 항목만 표시
addListItem(anywhere);