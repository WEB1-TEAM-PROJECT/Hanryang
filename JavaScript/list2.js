// 리스트 데이터 생성
var myListData = [
    {title: "전시", period: "2023.07.30"},
    {title: "팝업", period: "2023.08.13"}
    // 추가적인 항목들...
];
  
  // HTML에 목록 추가하는 함수
  function addListItem(text) {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    document.getElementById("myList").appendChild(listItem);
  }
  
  // 필터링된 항목만 HTML에 추가하는 함수
  function displayFilteredItems(title) {
    for (var i = 0; i < myListData.length; i++) {
      if (myListData[i].title === title) {
        addListItem(myListData[i]);
      }
    }
  }
  
  // 특정 카테고리의 항목만 표시
  displayFilteredItems("전시");
  