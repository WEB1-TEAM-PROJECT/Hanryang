function mouseOn() {
    popup_button.setAttribute('class', 'hover')
}
function mouseOut() {
    popup_button.removeAttribute('class', 'hover')
}

let popbtns = Array.from(document.querySelectorAll('button'));
for(let popbtn of popbtns){
    popbtn.addEventListener('mouseover', mouseOn)
    popbtn.addEventListener('mouseout', mouseOut)
}

let els = Array.from(document.querySelectorAll('.container'));
const hiddenDiv = document.querySelector('.dog');
for(let el of els){
    el.addEventListener('mouseover', function handleMouseOver() {
        hiddenDiv.style.display = 'block';
     });
    el.addEventListener('mouseout', function handleMouseOut() {
        hiddenDiv.style.display = 'none';
    });
}
