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

const el = document.querySelector('.container');
const hiddenDiv = document.querySelector('.dog');
el.addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv.style.display = 'block';
 });
el.addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv.style.display = 'none';
});