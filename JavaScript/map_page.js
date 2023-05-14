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