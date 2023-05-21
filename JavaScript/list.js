import point from './ListPage_i.js';
//point 값 호출

//리스트 항목 : 생성자 함수 통해 변수 전달
//let somewhere = new list("전시", "23.07.30", "서울");
//let anywhere = new list("팝업", "23.08.15", "강남");
function getList(value) {
    let somewhere = new list("전시", "23.07.30", "서울");
    let anywhere = new list("팝업", "23.08.15", "강남");
  
    if (`${value}`==='somewhere') {
      return somewhere;
    } else if (`${value}`==='anywhere') {
      return anywhere;
    } else {
      return null; // 만약 값이 어느 리스트에도 속하지 않으면 null 반환
    }
}

function list(title, period, place)
{
    this.title=title;
    this.period=period;
    this.place=place;
}

/*
let where = [
    ["전시", "23.07.30", "서울"],
    ["팝업", "23.08.15", "강남"],
    ["놀이", "23.06.28", "홍대"]
];*/

// HTML에 목록 추가하는 함수
function addListItem(category) {
    document.querySelector('#title').innerHTML=category.title;
    document.querySelector('#period').innerHTML=category.period;
    document.querySelector('#place').innerHTML=category.place;
}
// 특정 카테고리의 항목만 표시
addListItem(getList(point));
//console.log(getList(point));
//document.querySelector('#place').innerHTML=point;
/*이중배열
addListItem(new list(where[0][0], where[0][1], where[0][2]));
*/