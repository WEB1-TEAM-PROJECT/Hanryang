// 마커 선언
let els = Array.from(document.querySelectorAll('.container'));
let showCons = Array.from(document.querySelectorAll('.dog'));

//마우스 올릴시 띄우기
for(let i=0; i<els.length; i++){
    els[i].addEventListener('mouseover', e=>{
        showCons[i].style.display = 'block';
    });
}
// 마우스 내릴시 안띄우기
for(let el of els){
    el.addEventListener('mouseout', e=>{
        for(let showCon of showCons){
            showCon.style.display = 'none';
        }
    })
};